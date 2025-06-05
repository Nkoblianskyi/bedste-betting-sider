import { Star, Phone } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"
import Image from "next/image"

interface BettingSiteCardProps {
  site: BettingSite
  rank?: number
  featured?: boolean
}

export default function BettingSiteCard({ site, rank, featured = false }: BettingSiteCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={`${i < Math.floor(rating) ? "text-neon-yellow fill-current drop-shadow-lg" : "text-gray-600"}`}
      />
    ))
  }

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className={`card neon-border relative p-8 group ${featured ? "ring-2 ring-neon-green" : ""}`}>
        {rank && <div className="rank-badge">#{rank}</div>}

        <div className="flex items-center justify-between mb-6">
          <Image
            src={site.logo || "/placeholder.svg"}
            alt={`${site.name} logo`}
            width={180}
            height={90}
            className="object-contain filter brightness-110"
          />
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-2">{renderStars(site.rating)}</div>
            <div className="text-lg font-bold text-neon-blue">{site.rating}/5</div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
            {site.name}
          </h3>
          <div className="bonus-glow text-center py-3">{site.bonus}</div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 text-gray-200 text-sm">
            <Phone size={16} className="text-neon-blue" />
            <span className="font-semibold">{site.calls.toLocaleString()} opkald</span>
          </div>
        </div>

        <div className="btn-glow w-full text-lg py-4 mb-4 text-center">Hent Bonus</div>

        <div className="text-xs text-gray-300 text-center leading-relaxed">
          <span className="text-red-400 font-bold">18+</span> |
          <span className="text-neon-blue hover:underline mx-1">Regler og vilkår gælder</span> |
          <span className="text-neon-blue hover:underline ml-1">GambleAware.org</span>
        </div>
      </div>
    </a>
  )
}
