import { getAIResponse } from '@/lib/ai-utils'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const response = await getAIResponse(message)
    
    return NextResponse.json({ response })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    )
  }
} 