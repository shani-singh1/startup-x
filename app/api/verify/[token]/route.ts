import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Waitlist from '@/models/Waitlist'

export async function GET(
  request: Request,
  { params }: { params: { token: string } }
) {
  try {
    const { token } = params
    await connectToDatabase()

    const waitlistEntry = await Waitlist.findOne({ verificationToken: token })

    if (!waitlistEntry) {
      return NextResponse.json(
        { error: 'Invalid verification token' },
        { status: 400 }
      )
    }

    if (waitlistEntry.verified) {
      return NextResponse.json(
        { message: 'Email already verified' },
        { status: 200 }
      )
    }

    waitlistEntry.verified = true
    waitlistEntry.verificationToken = undefined
    await waitlistEntry.save()

    // Redirect to success page
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/verification-success`
    )
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 