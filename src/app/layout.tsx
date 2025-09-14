import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ทำนายฝัน พร้อมเลขเด็ด | ดูดวงจากความฝัน',
  description: 'เว็บไซต์ทำนายฝัน พร้อมเลขเด็ดจากวัน เดือน ปี และเวลาเกิด วิเคราะห์ดวงชะตาแม่นยำ ใช้งานง่ายบนมือถือ',
  keywords: ['ทำนายฝัน', 'เลขเด็ด', 'ดวงชะตา', 'ดูดวง', 'ทำนายเลข', 'ความฝัน', 'เลขเด่น', 'ฝันเห็น'],
  authors: [{ name: 'ทีมพัฒนาเว็บไซต์ดูดวง' }],
  openGraph: {
    title: 'ทำนายฝัน พร้อมเลขเด็ด | ดูดวงจากความฝัน',
    description: 'กรอกวันเดือนปีเกิดและเวลา เพื่อทำนายความฝัน พร้อมรับเลขเด็ดที่แม่นยำ',
    type: 'website',
    url: 'https://ฝันเลขเด็ด.com/',
    images: [
      {
        url: 'https://ฝันเลขเด็ด.com/logo.jpg',
        width: 800,
        height: 600,
        alt: 'ทำนายฝันเลขเด็ด',
      },
    ],
  },
  twitter: {
    images: ['https://ฝันเลขเด็ด.com/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="icon" href="https://ฝันเลขเด็ด.com/favicon.png" type="image/png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y1XM02FJB9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y1XM02FJB9');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans bg-gradient-to-b from-brand-50 via-white to-white dark:from-[#0b0b12] dark:via-[#0b0b12] dark:to-[#0b0b12] text-slate-800 dark:text-slate-100`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}