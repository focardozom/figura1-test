import type { Metadata } from 'next'
import { Playfair_Display, Martel_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const martel = Martel_Sans({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-martel'
})

export const metadata: Metadata = {
  title: 'Figura 01 - Expert Intervention Evaluation & Analysis',
  description: 'Expert evaluation and analysis for preventive interventions and wellbeing programs, powered by advanced data science and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${martel.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className="font-martel">
        {children}
      </body>
    </html>
  )
} 