import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Areeb Khan - Full Stack Developer',
  description: 'Portfolio website showcasing experience in React, TypeScript, Node.js and modern web technologies',
  keywords: 'Full Stack Developer, React, TypeScript, Node.js, Portfolio',
  authors: [{ name: 'Areeb Khan' }],
  openGraph: {
    title: 'Areeb Khan - Full Stack Developer',
    description: 'Portfolio website showcasing experience in React, TypeScript, Node.js and modern web technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body className="font-rubik antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}