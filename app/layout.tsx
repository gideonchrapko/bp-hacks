import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BP Hacks 2026 | Build, ship, and demo a Discord agent in one day',
  description: 'One-day in-person hackathon in Québec City, March 14th, 2026. Build creative agents with Botpress. $500 CAD + Botpress credits + swag. Free registration.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
