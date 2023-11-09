import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'TabLinks',
  description: 'Usefull links for developers created by Diego Natalo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
