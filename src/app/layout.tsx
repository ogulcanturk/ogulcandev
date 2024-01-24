// Next
import type { Metadata } from 'next'

// Style, Font
import '@/assets/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oğulcan',
  description: 'Im a software developer from Türkiye making useful things for the internet and exploring the world.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
