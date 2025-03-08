'use client'

import ServiceCard from './ServiceCard'
import { cn } from '@/lib/utils'

export default function Services() {
  const services = [
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
      title: "AI Translation",
      description: "Enhance qualitative research with advanced AI-powered transcription and analysis.",
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

  const handleScheduleDemo = () => {
    window.location.href = 'mailto:contact@figura01.com?subject=Schedule%20a%20Demo&body=I%20would%20like%20to%20schedule%20a%20demo%20for%20your%20services.'
  }

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-2xl md:text-3xl font-bold mb-4",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-blue-600 to-emerald-600",
            "font-playfair italic",
            "leading-tight"
          )}>
            Our Services
          </h2>
          <p className={cn(
            "text-gray-600 text-lg",
            "font-martel font-light",
            "leading-relaxed"
          )}>
            Comprehensive solutions to drive meaningful social impact and sustainable change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleScheduleDemo}
            className={cn(
              "group relative px-8 py-3",
              "bg-gradient-to-r from-blue-500 to-emerald-500",
              "text-white rounded-full",
              "font-martel font-semibold",
              "text-sm md:text-base",
              "overflow-hidden transition-all hover:scale-105"
            )}
          >
            <span className="relative z-10">Schedule a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  )
} 