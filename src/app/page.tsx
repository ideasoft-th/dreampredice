'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import DreamForm from '@/components/DreamForm'
import Results from '@/components/Results'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'

interface PredictionResults {
  highlightNumbers: string[]
  twoDigitNumbers: string[]
  threeDigitNumbers: string[]
  predictionText: string
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<PredictionResults | null>(null)

  const handlePredict = async (apiResponse: any) => {
    setIsLoading(true)

    try {
      // Check if there's an error from the API call
      if (apiResponse.error) {
        throw new Error(apiResponse.error)
      }

      // Transform API response to match Results component format
      if (apiResponse && Array.isArray(apiResponse) && apiResponse.length > 0) {
        const result = apiResponse[0]
        const transformedResults = {
          highlightNumbers: result.lucky_top3?.map(String) || ['8', '2', '9'],
          twoDigitNumbers: result.lucky_pairs || ['82', '29', '98', '28', '92', '89'],
          threeDigitNumbers: result.last_three_digits || ['829', '298', '982'],
          predictionText: result.prediction_text || 'เกณฑ์รับทรัพย์จากผู้ใหญ่ หรือเลขที่เกี่ยวข้องกับที่อยู่อาศัย ให้โฟกัสเลขเด่นในงวดถัดไป'
        }
        setResults(transformedResults)
      } else {
        throw new Error('Invalid API response format')
      }

      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)

    } catch (error) {
      console.error('Prediction error:', error)
      // Show fallback demo results
      setResults({
        highlightNumbers: ['8', '2', '9'],
        twoDigitNumbers: ['82', '29', '98', '28', '92', '89'],
        threeDigitNumbers: ['829', '298', '982'],
        predictionText: typeof error === 'string' ? error : 'เกิดข้อผิดพลาดในการทำนาย กรุณาลองใหม่อีกครั้ง'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-mystical-gradient relative overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb top-20 left-10 animation-delay-0"></div>
      <div className="floating-orb top-40 right-20 animation-delay-1000"></div>
      <div className="floating-orb bottom-40 left-1/4 animation-delay-2000"></div>
      <div className="floating-orb top-1/2 right-1/3 animation-delay-3000"></div>
      <div className="floating-orb bottom-20 right-10 animation-delay-4000"></div>
      
      <Navigation />
      
      {/* Hero */}
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-6 md:pt-14 md:pb-10 relative z-10">
        <div className="mystical-card p-6 md:p-10">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gold-gradient mb-3 animate-pulse-gold">
              🔮 ทำนายฝัน พร้อมเลขเด็ด ✨
            </h1>
            <p className="text-gold-300/90 text-base md:text-lg leading-relaxed">
              เปิดเผยความลับแห่งความฝัน กับการทำนายเลขเด็ดจากวันเดือนปีเกิด
            </p>
            <div className="mt-4 flex items-center gap-2 text-gold-400/80 text-sm">
              <span>🌙</span>
              <span>ความลึกลับแห่งจักรวาล รอการค้นพบ</span>
              <span>⭐</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <DreamForm onSubmit={handlePredict} />
        {results && <Results results={results} />}
      </div>

      <Footer />
      <LoadingOverlay isVisible={isLoading} />
    </main>
  )
}