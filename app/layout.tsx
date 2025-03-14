import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gabriel F Paiva',
  description: 'Portfólio de Gabriel Fernandes Paiva, desenvolvedor full stack e mobile.',
  generator: 'g7.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
