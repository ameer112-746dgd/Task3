import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Newsletter } from '@/components/Newsletter'
import './globals.css'

export const metadata: Metadata = {
  title: 'The JSDude Blog',
  description: 'A blog about Javascript, Design, and Programming.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  )
}