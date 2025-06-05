"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-row gap-4 items-center justify-center">
            <Image src={'/logo.png'} alt="Top Bettingsider i Danmark" width={50} height={50} />
            <div className="text-3xl font-bold text-neon-green">Bedste Bettingsider</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-neon-blue transition-colors">
              Hjem
            </Link>
            <Link href="#ansvarligt-spil" className="text-white hover:text-neon-blue transition-colors">
              Ansvarligt Spil
            </Link>
            <Link href="/om-os" className="text-white hover:text-neon-blue transition-colors">
              Om os
            </Link>
          </nav>

          {/* 18+ Badge */}
          <div className="hidden md:block">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse-neon">18+</div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-800 rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-neon-blue transition-colors">
                Hjem
              </Link>
              <Link href="#ansvarligt-spil" className="text-white hover:text-neon-blue transition-colors">
                Ansvarligt Spil
              </Link>
              <Link href="/om-os" className="text-white hover:text-neon-blue transition-colors">
                Om os
              </Link>
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold text-center">18+</div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
