"use client"

import { useState, useEffect } from "react"
import { bettingSites, getCurrentMonth, getCurrentYear } from "@/lib/mock-data"
import BettingSiteCard from "./betting-site-card"
import Modal from "./modal"
import Image from "next/image"

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)
  const topThreeSites = bettingSites.filter((site) => site.featured).slice(0, 3)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background glow effects - reduced sizes for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-neon-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-neon-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-neon-purple/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4 md:mb-16">
          <div className="flex flex-col items-center justify-center space-x-3 mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6 text-white">
              Top Bettingsider i Danmark
            </h1>
            <Image src={"/denmark.png"} alt="Top Bettingsider i Danmark" width={50} height={50} />
          </div>
          <div className="text-lg md:text-xl lg:text-2xl text-neon-green font-bold mb-2 md:mb-4">
            Opdateret {getCurrentMonth()} {getCurrentYear()}
          </div>
          <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto mb-4 md:mb-12 leading-relaxed">
            Vi har testet og rangeret Danmarks bedste bettingsider i 2025. Her er vores topvalg!
          </p>

          <div className="glow-tags flex flex-wrap justify-center gap-2 md:gap-6 mb-6 md:mb-16">
            <button
              onClick={() => setShowRulesModal(true)}
              className="glow-btn text-sm md:text-base py-2 px-4 md:px-6 md:py-3"
            >
              18+ | Spil ansvarligt!
            </button>
            <button
              onClick={() => setShowRulesModal(true)}
              className="glow-btn text-sm md:text-base py-2 px-4 md:px-6 md:py-3"
            >
              Regler og vilkår gælder
            </button>
          </div>
        </div>

        <div className="top3-grid grid lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {topThreeSites.map((site, index) => (
            <div key={site.id} className="transform hover:scale-105 transition-transform duration-300">
              <BettingSiteCard site={site} rank={index + 1} featured={true} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-16">
          <button
            onClick={() => {
              const element = document.getElementById("rating-list")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-neon-green to-neon-blue text-white font-bold py-3 md:py-6 px-6 md:px-12 rounded-xl text-lg md:text-2xl hover:shadow-2xl hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-neon-green/30 border-2 border-neon-green/50"
          >
            Se Alle Bettingsider
          </button>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="p-2 sm:p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center pr-6">
            Top Betting Sider
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {topThreeSites.map((site, index) => (
              <a key={site.id} href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-4 neon-border bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="rank-badge relative text-sm sm:text-base w-8 h-8 sm:w-10 sm:h-10">{index + 1}</div>
                  <div className="flex-shrink-0">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={`${site.name} logo`}
                      width={80}
                      height={40}
                      className="object-contain sm:w-[100px] sm:h-[50px]"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm sm:text-lg mb-1 truncate">{site.name}</h3>
                    <p className="text-xs sm:text-sm text-center bg-gradient-to-r from-neon-purple to-neon-pink text-white px-2 py-1 rounded text-nowrap overflow-hidden">
                      {site.bonus}
                    </p>
                    <div className="btn-glow w-full text-center py-1 sm:py-2 px-2 text-xs sm:text-sm mt-2">
                      Hent Bonus
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4 sm:mt-6 text-center text-gray-400 text-xs sm:text-sm">
            18+ | Spil ansvarligt | Regler og vilkår gælder
          </div>
        </div>
      </Modal>

      <Modal isOpen={showRulesModal} onClose={() => setShowRulesModal(false)}>
        <div className="p-3 sm:p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 pr-6">Regler og Vilkår</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300">
            <div className="bg-red-600/20 border border-red-500 rounded-lg p-3 sm:p-4">
              <h3 className="text-red-400 font-bold text-lg sm:text-xl mb-2">18+ Kun for voksne</h3>
              <p className="text-sm sm:text-base">Du skal være mindst 18 år for at deltage i gambling aktiviteter.</p>
            </div>

            <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-3 sm:p-4">
              <h3 className="text-yellow-400 font-bold text-base sm:text-lg mb-2">Ansvarligt Spil</h3>
              <p className="text-sm sm:text-base">
                Spil kun for det, du har råd til at tabe. Sæt grænser for dig selv.
              </p>
            </div>

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong className="text-white">Bonusvilkår:</strong> Alle bonusser har omsætningskrav.
              </p>
              <p>
                <strong className="text-white">Udbetaling:</strong> Gevinster udbetales efter verifikation.
              </p>
              <p>
                <strong className="text-white">Support:</strong> Kontakt kundeservice ved problemer.
              </p>
            </div>

            <div className="border-t border-gray-600 pt-3 sm:pt-4">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">For hjælp med spilleproblemer, kontakt:</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a href="https://stopspillet.dk" className="text-neon-blue hover:underline text-sm">
                  StopSpillet.dk
                </a>
                <a href="https://rofus.nu" className="text-neon-blue hover:underline text-sm">
                  ROFUS.nu
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  )
}
