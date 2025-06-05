"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export default function CookieConsent() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowModal(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowModal(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowModal(false)
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Full-screen semi-transparent background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal content */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-md w-full mx-4 p-8 border border-gray-700 shadow-2xl">
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <Cookie className="text-neon-yellow mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold text-white mb-4">Cookie Samtykke</h2>
        </div>

        <div className="text-gray-300 text-sm leading-relaxed mb-6">
          <p className="mb-4">
            Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside og for at vise dig relevante annoncer.
          </p>
          <p>
            Ved at klikke "Acceptér" samtykker du til vores brug af cookies. Du kan læse mere i vores{" "}
            <Link href="/cookie-policy" className="text-neon-blue hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAccept}
            className="flex-1 bg-gradient-to-r from-neon-green to-neon-blue text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300"
          >
            Acceptér
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 border-2 border-gray-600 text-white py-3 px-6 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
          >
            Afvis
          </button>
        </div>
      </div>
    </div>
  )
}
