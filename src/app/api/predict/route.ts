import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { DreamPredictor } from '@/lib/dreamPredictor'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { day, month, year, hour, minute, dream } = body

    // Validate input
    if (!day || !month || !year || !hour === undefined || !minute === undefined || !dream) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate prediction
    const prediction = DreamPredictor.predict(
      { day, month, year, hour, minute },
      dream
    )

    // Create user record
    const user = await prisma.user.create({
      data: {
        birthDay: day,
        birthMonth: month,
        birthYear: year,
        birthHour: hour,
        birthMinute: minute,
      }
    })

    // Save prediction to database
    const savedPrediction = await prisma.dreamPrediction.create({
      data: {
        userId: user.id,
        dreamText: dream,
        birthDay: day,
        birthMonth: month,
        birthYear: year,
        birthHour: hour,
        birthMinute: minute,
        highlightNumbers: prediction.highlightNumbers,
        twoDigitNumbers: prediction.twoDigitNumbers,
        threeDigitNumbers: prediction.threeDigitNumbers,
        predictionText: prediction.predictionText,
      }
    })

    return NextResponse.json({
      id: savedPrediction.id,
      highlightNumbers: prediction.highlightNumbers,
      twoDigitNumbers: prediction.twoDigitNumbers,
      threeDigitNumbers: prediction.threeDigitNumbers,
      predictionText: prediction.predictionText,
    })

  } catch (error) {
    console.error('Prediction API error:', error)
    
    // Return a fallback prediction if database fails
    const fallbackPrediction = DreamPredictor.predict(
      { day: 1, month: 1, year: 2500, hour: 0, minute: 0 },
      'fallback'
    )
    
    return NextResponse.json(fallbackPrediction)
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Dream Prediction API is running' })
}