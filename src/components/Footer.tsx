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
            href="https://lin.ee/w2uGMh0"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button group"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.629 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            ปรึกษาอาจารย์
            <span className="text-xs">📱</span>
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