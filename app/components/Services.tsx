'use client'

import { useState } from 'react'
import { cn } from '../../lib/utils'

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  details: string[]
}

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  
  // Handle card expansion
  const handleCardMouseEnter = (id: number) => {
    setExpandedCard(id)
  }

  const handleCardMouseLeave = () => {
    setExpandedCard(null)
  }
  
  const services: Service[] = [
    {
      title: "Social Impact Strategy",
      description: "Align your goals with social and environmental outcomes through data-driven strategies and SDG integration.",
      color: "blue",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l-7-7 7-7m8 14l7-7-7-7" />
        </svg>
      ),
      details: [
        "Strategic planning & SDG alignment",
        "Impact measurement frameworks",
        "Value-driven organizational design"
      ]
    },
    {
      title: "Program Design & Evaluation",
      description: "Create and assess impactful programs with evidence-based methodologies and clear success metrics.",
      color: "emerald",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: [
        "Program design & implementation",
        "Impact evaluation",
        "Data-driven improvements"
      ]
    },
    {
      title: "Policy Advocacy",
      description: "Drive systemic change through evidence-based policy advocacy and coalition building.",
      color: "purple",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      details: [
        "Policy research & analysis",
        "Coalition building",
        "Advocacy campaigns"
      ]
    },
    {
      title: "Capacity Building",
      description: "Empower your team with tailored training programs and leadership development.",
      color: "indigo",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      details: [
        "Leadership development",
        "Impact measurement training",
        "Best practices workshops"
      ]
    },
    {
      title: "Stakeholder Engagement",
      description: "Build lasting partnerships and engage stakeholders for collective impact.",
      color: "rose",
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: [
        "Partnership development",
        "Community engagement",
        "Collaborative initiatives"
      ]
    },
    {
      title: "AI Integration",
      description: "Enhance your operations with advanced AI-powered services and analysis. We offer transcription, translation, and data analysis tools.",
      color: "amber",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      details: [
        "AI-powered transcription",
        "Multilingual support",
        "Data analysis tools"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 font-playfair italic">
              Our Services
            </h2>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-martel font-light leading-relaxed">
              Solutions to drive meaningful social impact and sustainable change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-8">
            {services.map((service, index) => {
              // Check if this card is expanded
              const isExpanded = expandedCard === index;
              
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Regular card */}
                  <div 
                    className={cn(
                      "bg-white rounded-2xl p-6 shadow-md transition-all duration-300",
                      "flex flex-col h-full h-64 md:h-72",
                      "border border-gray-100",
                      isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className={cn(
                        "relative w-10 h-10 rounded-md overflow-hidden flex items-center justify-center",
                        `bg-${service.color}-50 transition-all group-hover:scale-110`
                      )}>
                        {service.icon}
                      </div>
                      <h3 className={cn(
                        "font-semibold text-gray-800 text-lg",
                        `text-${service.color}-600`
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-3 text-sm line-clamp-3 flex-grow">
                      {service.description}
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
                    onMouseEnter={() => handleCardMouseEnter(index)}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={cn(
                        "relative w-12 h-12 rounded-md overflow-hidden flex items-center justify-center",
                        `bg-${service.color}-50`
                      )}>
                        {service.icon}
                      </div>
                      <h3 className={cn(
                        "font-bold text-lg",
                        `text-${service.color}-600`
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Trigger area for expansion */}
                  <div 
                    className="absolute inset-0 cursor-pointer"
                    onMouseEnter={() => handleCardMouseEnter(index)}
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