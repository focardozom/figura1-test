'use client'

import { cn } from '../../lib/utils'
import { AuroraBackground } from './AuroraBackground'

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen">
      <AuroraBackground className="py-20 md:py-24" showRadialGradient={false}>
        <div className="container mx-auto px-6 pb-16 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
              Transform Your Data Into Insights
            </h2>
            <p className="mb-8 text-gray-600">
              Discover how our advanced solutions can revolutionize your intervention strategies.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <a 
                href="mailto:hola@figura1.com.co" 
                className={cn(
                  "group relative px-8 py-3",
                  "bg-gradient-to-r from-blue-500 to-emerald-500",
                  "text-white rounded-full",
                  "font-martel font-semibold",
                  "text-sm md:text-base",
                  "overflow-hidden transition-all hover:scale-105"
                )}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              
              <p className="text-gray-600 text-sm">
                Or send us an email directly at{' '}
                <a 
                  href="mailto:hola@figura1.com.co" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  hola@figura1.com.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
} 