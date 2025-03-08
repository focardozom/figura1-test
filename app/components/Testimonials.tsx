'use client'
import { useState } from 'react'

interface Testimonial {
  name: string
  role: string
  organization: string
  content: string
  image: string
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Director",
      organization: "Global Health Institute",
      content: "Figura 01's evaluation framework helped us measure the true impact of our community health programs. Their data-driven insights were invaluable in securing continued funding.",
      image: "/testimonials/sarah.jpg" // Add actual image path
    },
    {
      name: "Prof. Miguel Rodriguez",
      role: "Lead Investigator",
      organization: "Social Innovation Lab",
      content: "The clarity and precision of their policy communication strategy transformed how we present our research findings to stakeholders. Outstanding results.",
      image: "/testimonials/miguel.jpg"
    },
    {
      name: "Dr. Emma Thompson",
      role: "Program Director",
      organization: "Education First Initiative",
      content: "Their AI transcription service dramatically reduced our analysis time. The accuracy and quick turnaround allowed us to focus more on meaningful intervention design.",
      image: "/testimonials/emma.jpg"
    },
    {
      name: "Dr. x",
      role: "Program Director",
      organization: "Education",
      content: "Their AI tr service dramatically reduced our analysis time. The accuracy and quick turnaround allowed us to focus more on meaningful intervention design.",
      image: "/testimonials/emma.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
          What Our Partners Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 opacity-20"></div>
                        {/* Placeholder for image */}
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-600">
                          {testimonial.name[0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-600">{testimonial.organization}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 