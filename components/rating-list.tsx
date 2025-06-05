import { bettingSites } from "@/lib/mock-data"
import BettingSiteCard from "./betting-site-card"

export default function RatingList() {
  return (
    <section id="rating-list" className="py-16 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Komplet Topliste</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Her er vores komplette rangering af Danmarks bedste bettingsider
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
