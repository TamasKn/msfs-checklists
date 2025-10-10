import { Geist_Mono, Funnel_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/main/footer'
import Navbar from './components/main/navbar'

const funnelSans = Funnel_Sans({
  variable: '--font-funnel-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'MSFS Checklists',
  description: 'Checklists for Microsoft Flight Simulator'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
      >
        <Navbar />
        <div className="w-full min-h-screen flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
