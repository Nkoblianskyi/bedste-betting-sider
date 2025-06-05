"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react"

const reviews = [
  {
    name: "Lars M.",
    rating: 5,
    comment: "Fantastisk side! Fandt den perfekte betting side gennem deres anbefalinger.",
    site: "ComeOn",
    date: "15. maj 2025",
  },
  {
    name: "Maria K.",
    rating: 5,
    comment: "Meget hjælpsom guide. Bonusserne var præcis som beskrevet.",
    site: "Betsson",
    date: "12. maj 2025",
  },
  {
    name: "Thomas H.",
    rating: 4,
    comment: "God oversigt over alle betting sider. Sparer mig for meget tid.",
    site: "LeoVegas",
    date: "8. maj 2025",
  },
  {
    name: "Anna S.",
    rating: 5,
    comment: "Troværdige anmeldelser og gode råd om ansvarligt spil.",
    site: "GetLucky",
    date: "5. maj 2025",
  },
]

export default function UserReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={20} className={`${i < rating ? "text-neon-yellow fill-current" : "text-gray-600"}`} />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <User className="text-neon-green animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Brugernes Favoritter</h2>
          </div>
          <p className="text-gray-300 text-lg">Hvad siger vores brugere?</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-neon-green mb-2">4.9</div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <div className="text-gray-400">ud af 5 baseret på 2,847 anmeldelser</div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">{renderStars(review.rating)}</div>
                      <blockquote className="text-xl text-gray-300 mb-6 italic">"{review.comment}"</blockquote>
                      <div className="text-neon-blue font-semibold text-lg">{review.name}</div>
                      <div className="text-gray-500 text-sm">
                        {review.site} • {review.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button onClick={prevReview} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <ChevronLeft className="text-white" size={24} />
              </button>

              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-neon-green" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button onClick={nextReview} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
