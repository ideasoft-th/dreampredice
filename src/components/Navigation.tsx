'use client'

import { useTheme } from './ThemeProvider'
import Image from 'next/image'

export default function Navigation() {
  const { toggleTheme } = useTheme()

  return (
    <nav className="mystical-nav">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/logo.jpg"
              alt="โลโก้"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-cover ring-2 ring-gold-500/40 shadow-lg shadow-gold-900/30"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full animate-ping"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gold-300">🔮 ทำนายฝันเลขเด็ด</span>
            <span className="text-xs text-gold-500/70">ความลึกลับแห่งจักรวาล</span>
          </div>
        </a>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-gold-400/60">
            <span>🌙</span>
            <span>รูปแบบลึกลับ</span>
          </div>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-xl border border-gold-600/30 bg-mystical-800/50 backdrop-blur-sm px-3 py-1.5 text-sm text-gold-300 hover:bg-mystical-700/60 hover:border-gold-500/50 transition-all duration-300"
          >
            {/* Crystal ball icon - always show for mystical theme */}
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            
            <span>ปรับโหมด</span>
            <span className="text-xs">✨</span>
          </button>
        </div>
      </div>
    </nav>
  )
}