'use client'

import { useTypewriter } from '../hooks/useTypewriter'

interface ResultsProps {
  results: {
    highlightNumbers: string[]
    twoDigitNumbers: string[]
    threeDigitNumbers: string[]
    predictionText: string
  }
}

export default function Results({ results }: ResultsProps) {
  const { displayedText: typedPrediction, isTyping } = useTypewriter({
    text: results.predictionText,
    speed: 30,
    delay: 1000
  })

  const NumberBadge = ({ number, index = 0 }: { number: string, index?: number }) => (
    <span 
      className="number-badge animate-fadeInUp" 
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {number}
    </span>
  )

  return (
    <section id="results" className="mt-8 mb-12 relative">
      {/* Magical reveal animation */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gold-300 mb-2">✨ ผลการทำนาย ✨</h2>
        <p className="text-gold-400/70">ความลึกลับจากจักรวาลเปิดเผยแล้ว</p>
        <div className="w-24 h-1 bg-gold-gradient mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* เลขเด่น */}
        <div className="result-card group">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⭐</span>
              <h3 className="result-title text-gold-300">เลขเด่น</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {results.highlightNumbers.map((number, index) => (
                <NumberBadge key={index} number={number} index={index} />
              ))}
            </div>
            <p className="text-xs text-gold-500/60 mt-3">เลขหลักที่มีพลังมากที่สุด</p>
          </div>
        </div>

        {/* 2 ตัว */}
        <div className="result-card group">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="result-title text-gold-300">เลข 2 ตัว</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {results.twoDigitNumbers.map((number, index) => (
                <NumberBadge key={index} number={number} index={index + 3} />
              ))}
            </div>
            <p className="text-xs text-gold-500/60 mt-3">เลขคู่แห่งโชคลาภ</p>
          </div>
        </div>

        {/* 3 ตัว */}
        <div className="result-card group">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔥</span>
              <h3 className="result-title text-gold-300">เลข 3 ตัว</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {results.threeDigitNumbers.map((number, index) => (
                <NumberBadge key={index} number={number} index={index + 6} />
              ))}
            </div>
            <p className="text-xs text-gold-500/60 mt-3">ตัวเลขแห่งความมั่งคั่ง</p>
          </div>
        </div>
      </div>

      <div className="mt-8 mystical-card p-6">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔮</span>
            <h3 className="text-xl font-bold text-gold-300">นัยยะแห่งความฝัน</h3>
          </div>
          <div className="bg-mystical-700/40 rounded-2xl p-4 border border-gold-600/20">
            <p className={`text-gold-200/90 leading-relaxed text-base typewriter-text ${isTyping ? 'typewriter-cursor' : ''}`}>
              {typedPrediction}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-gold-500/60 text-sm">
            <span>🌟</span>
            <span>ทำนายโดยพลังแห่งจักรวาล</span>
            <span>🌟</span>
          </div>
        </div>
      </div>
    </section>
  )
}