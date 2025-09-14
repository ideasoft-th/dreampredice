export default function Footer() {
  return (
    <footer className="border-t border-gold-600/20 bg-mystical-800/60 backdrop-blur-md mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-mystical-radial opacity-50"></div>
      <div className="mx-auto max-w-5xl px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🔮</span>
            <h3 className="text-xl font-bold text-gold-300">ทำนายฝันเลขเด็ด</h3>
            <span className="text-3xl">✨</span>
          </div>
          <p className="text-gold-400/80 max-w-2xl mx-auto leading-relaxed">
            ค้นพบความลึกลับแห่งความฝัน เปิดเผยเลขเด็ดที่ซ่อนอยู่ในจิตใต้สำนึก
            ด้วยพลังแห่งจักรวาลและภูมิปัญญาโบราณ
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gold-600/20">
          <div className="flex items-center gap-4 text-gold-500/70 text-sm">
            <div className="flex items-center gap-2">
              <span>🌙</span>
              <span>พลังแห่งความฝัน</span>
            </div>
            <div className="hidden md:block w-1 h-4 bg-gold-600/30 rounded"></div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>ความแม่นยำสูง</span>
            </div>
            <div className="hidden md:block w-1 h-4 bg-gold-600/30 rounded"></div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>ข้อมูลปลอดภัย</span>
            </div>
          </div>
          
          <a
            href="/signup"
            className="gold-button group"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            เข้าร่วมกับเรา
            <span className="text-xs">🌟</span>
          </a>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-gold-600/10">
          <p className="text-gold-500/50 text-xs">
            © 2024 ทำนายฝันเลขเด็ด | ด้วยความเคารพต่อภูมิปัญญาไทย
          </p>
        </div>
      </div>
    </footer>
  )
}