import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Waitlist from '@/models/Waitlist'
import { isValidEmail } from '@/lib/validation'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    await connectToDatabase()

    // Check if email already exists
    const existingEmail = await Waitlist.findOne({ email })
    if (existingEmail) {
      if (!existingEmail.verified) {
        // Resend verification email
        await sendVerificationEmail(email, existingEmail.verificationToken)
        return NextResponse.json({
          message: 'Verification email resent',
          requiresVerification: true
        })
      }
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    // Create verification token
    const verificationToken = crypto.randomUUID()

    // Save to database
    const waitlistEntry = new Waitlist({
      email,
      verificationToken,
      verified: false
    })
    await waitlistEntry.save()

    // Send verification email
    await sendVerificationEmail(email, verificationToken)

    return NextResponse.json({
      message: 'Please check your email to verify your registration',
      requiresVerification: true
    })
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function sendVerificationEmail(email: string, token: string) {
  try {
    await resend.emails.send({
      from: 'Propab <verify@yourdomain.com>',
      to: email,
      subject: 'Verify your waitlist registration',
      html: `
        <h2>Welcome to Propab!</h2>
        <p>Please click the link below to verify your email address:</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/api/verify/${token}">
          Verify Email Address
        </a>
        <p>This link will expire in 24 hours.</p>
      `
    })
  } catch (error) {
    console.error('Email sending error:', error)
    throw error
  }
} 