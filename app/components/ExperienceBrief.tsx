'use client'

import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import Image from 'next/image'

interface Experience {
  id: number
  clientName: string
  location: string
  year: number | string
  logo: string
  description: string
  size: 'small' | 'medium' | 'large'
}

export default function ExperienceBrief() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  useEffect(() => {
    // Fetch the experiences data
    const fetchExperiences = async () => {
      try {
        const response = await import('../data/experiences.json')
        // Use double type assertion to avoid type issues
        setExperiences(response.default as unknown as Experience[])
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to load experiences data:', error)
        setIsLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  // Handle image loading errors
  const handleImageError = (id: number) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }))
  }

  // Handle card expansion
  const handleCardMouseEnter = (id: number) => {
    setExpandedCard(id)
  }

  const handleCardMouseLeave = () => {
    setExpandedCard(null)
  }

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading experiences...</div>
        </div>
      </section>
    )
  }

  // Sort experiences by size to properly arrange the grid
  const sortedExperiences = [...experiences].sort((a, b) => {
    const sizeOrder = { large: 0, medium: 1, small: 2 };
    return sizeOrder[a.size] - sizeOrder[b.size];
  });

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 font-playfair italic">
            Our Experience Brief
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 mx-auto">
            {sortedExperiences.map((exp) => {
              // Define size classes for different screen sizes
              const sizeClasses = {
                small: "sm:col-span-1 md:col-span-3 lg:col-span-4",
                medium: "sm:col-span-1 md:col-span-3 lg:col-span-4",
                large: "sm:col-span-2 md:col-span-6 lg:col-span-8"
              }
              
              // Define height classes for different sizes
              const heightClasses = {
                small: "h-60 sm:h-64",
                medium: "h-60 sm:h-64",
                large: "h-60 sm:h-64"
              }
              
              // Check if this image has an error
              const hasImageError = imageErrors[exp.id] || false;
              
              // Check if this card is expanded
              const isExpanded = expandedCard === exp.id;
              
              return (
                <div 
                  key={exp.id}
                  className={cn(
                    "group relative",
                    sizeClasses[exp.size]
                  )}
                >
                  {/* Regular card */}
                  <div 
                    className={cn(
                      "bg-white rounded-2xl p-6 shadow-md transition-all duration-300",
                      "flex flex-col h-full",
                      "border border-gray-100",
                      heightClasses[exp.size],
                      isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center transition-all group-hover:scale-110">
                        {/* Try to load any logo image, and fallback to initial if it fails */}
                        {!hasImageError ? (
                          <Image 
                            src={exp.logo} 
                            alt={`${exp.clientName} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                            onError={() => handleImageError(exp.id)}
                          />
                        ) : (
                          <div className="text-gray-500 font-bold text-lg">
                            {exp.clientName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{exp.clientName}</h3>
                        <div className="flex text-xs md:text-sm text-gray-500 gap-2">
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className={cn(
                      "text-gray-600 mb-3 text-sm",
                      exp.size === 'small' ? "line-clamp-2" : "line-clamp-2 md:line-clamp-3",
                      "flex-grow"
                    )}>
                      {exp.description}
                    </p>
                    
                    <div className="mt-auto">
                      {/* Empty div to maintain spacing */}
                    </div>
                  </div>
                  
                  {/* Expanded card overlay */}
                  <div 
                    className={cn(
                      "absolute inset-0 bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 z-10",
                      "flex flex-col",
                      "border border-gray-100",
                      isExpanded ? "opacity-100 transform scale-105" : "opacity-0 pointer-events-none"
                    )}
                    onMouseEnter={() => handleCardMouseEnter(exp.id)}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                        {!hasImageError ? (
                          <Image 
                            src={exp.logo} 
                            alt={`${exp.clientName} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        ) : (
                          <div className="text-gray-500 font-bold text-lg">
                            {exp.clientName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{exp.clientName}</h3>
                        <div className="flex text-xs md:text-sm text-gray-500 gap-2">
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-gray-600 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Trigger area for expansion */}
                  <div 
                    className="absolute inset-0 cursor-pointer"
                    onMouseEnter={() => handleCardMouseEnter(exp.id)}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 