import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Oli Carter | Web Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
