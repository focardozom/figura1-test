import type { Metadata } from 'next'
import { Playfair_Display, Martel_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

const martel = Martel_Sans({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-martel',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Figura 01 - Expert Intervention Evaluation & Analysis',
  description: 'Expert evaluation and analysis for preventive interventions and wellbeing programs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${martel.variable}`}>
      <body className="font-martel antialiased m-0 p-0">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 