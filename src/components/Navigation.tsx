'use client'

import Image from 'next/image'

export default function Navigation() {

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
        
        <div className="flex items-center gap-2 text-xs text-gold-400/60">
          <span>🌙</span>
          <span>รูปแบบลึกลับ</span>
        </div>
      </div>
    </nav>
  )
}