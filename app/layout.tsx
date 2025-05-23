import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Pagepro - Next.js, Sanity and Expo Development Agency",
  description: "Frictionless Development for CTOs of Digital Product Scale-Ups",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${workSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
