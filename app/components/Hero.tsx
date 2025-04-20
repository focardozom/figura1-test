'use client'
import { cn } from '../../lib/utils'
import { AuroraBackground } from "./AuroraBackground"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const targetPosition = section.offsetTop
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1000
      let start: number | null = null

      function animation(currentTime: number) {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        
        const easeInOutCubic = (t: number) => {
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2
        }

        window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)))

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <AuroraBackground className="py-24">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center">
          <h1 className={cn(
            "italic text-4xl md:text-6xl font-bold mb-4 md:mb-6",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-blue-600 to-emerald-600",
            "leading-normal py-2",
            "font-playfair"
          )}>
            Figura 01.
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl text-gray-600 font-martel px-4 md:px-0">
            Empowering organizations to create sustainable social change through evidence-based evaluations and data-driven solutions.
          </p>
          <button 
            onClick={() => scrollToSection('services')}
            className={cn(
              "group relative px-8 py-3",
              "bg-gradient-to-r from-blue-500 to-emerald-500",
              "text-white rounded-full font-semibold",
              "overflow-hidden transition-all hover:scale-105",
              "font-martel"
            )}
          >
            <span className="relative z-10">Discover Solutions</span>
            <div className={cn(
              "absolute inset-0",
              "bg-gradient-to-r from-blue-600 to-emerald-600",
              "transform scale-x-0 group-hover:scale-x-100",
              "transition-transform origin-left"
            )}></div>
          </button>
        </div>
      </div>
    </AuroraBackground>
  )
} 