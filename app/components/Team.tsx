'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  socialLinks?: {
    linkedin?: string
    email?: string
    github?: string
  }
}

export default function Team() {
  // Sample team members
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Natalia Córdoba",
      role: "Lead Researcher & Founder",
      bio: "Natalia has over 10 years of experience in social impact evaluation and policy research.",
      image: "/team/team-1.JPEG",
      socialLinks: {
        linkedin: "natalia-córdoba-4a9400152",
        email: "n.cordoba@figura1.com.co"
      }
    },
    {
      id: 2,
      name: "Francisco Cardozo",
      role: "Data Science Director",
      bio: "Francisco leads our data science initiatives, specializing in statistical analysis and impact measurement.",
      image: "/team/team-2.JPEG",
      socialLinks: {
        linkedin: "francisco-cardozo-m",
        github: "https://github.com/focardozom",
        email: "f.cardozo@figura1.com.co"
      }
    }
  ]

  // Track which member's details are being viewed
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  // Removing unused function getEmailDisplay

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 font-playfair italic">
              Our Team
            </h2>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-martel font-light leading-relaxed">
              Meet the experts behind our impactful research and evaluations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group relative"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div 
                  className={cn(
                    "bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300",
                    "hover:shadow-lg",
                    hoveredMember === member.id && "transform scale-105"
                  )}
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Placeholder with unique gradient for each team member */}
                    <div className={cn(
                      "absolute inset-0 flex items-center justify-center",
                      member.id === 1 ? "bg-gradient-to-br from-blue-300 to-indigo-400" :
                      "bg-gradient-to-br from-emerald-300 to-blue-400"
                    )}>
                      <span className="text-white text-4xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                    
                    {/* This would display the actual image when available */}
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Overlay on hover */}
                    <div 
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300",
                        hoveredMember === member.id ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="p-4 text-white">
                        <p className="text-sm font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{member.name}</h3>
                    <p className={cn(
                      "text-sm text-blue-600 font-medium mb-3 transition-all",
                      hoveredMember === member.id ? "opacity-0 h-0" : "opacity-100"
                    )}>{member.role}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Display email address */}
                    {member.socialLinks?.email && (
                      <p className="text-sm text-gray-500 mb-3 truncate">
                        {member.socialLinks.email}
                      </p>
                    )}
                    
                    <div className="flex space-x-3">
                      {member.socialLinks?.linkedin && (
                        <a 
                          href={`https://linkedin.com/in/${member.socialLinks.linkedin}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                          title="LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      
                      {member.socialLinks?.github && (
                        <a 
                          href={member.socialLinks.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                          title="GitHub"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-martel font-light leading-relaxed">
              We customize our teams based on each project&apos;s unique needs, bringing together masters-level professionals and experts from diverse regions of Colombia. This collaborative approach ensures we deliver locally-informed, academically rigorous solutions that truly address community challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 