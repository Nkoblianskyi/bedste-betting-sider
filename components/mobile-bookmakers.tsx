"use client"

import { Shield, Award, Smartphone, Clock, CreditCard, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Sikkerhed & Licens",
    description: "Alle vores anbefalede sider har gyldige danske licenser og bruger avanceret kryptering.",
  },
  {
    icon: Award,
    title: "Bedste Bonusser",
    description: "Vi finder de mest fordelagtige velkomstbonusser og løbende tilbud til danske spillere.",
  },
  {
    icon: Smartphone,
    title: "Mobil Optimeret",
    description: "Perfekt funktionalitet på alle enheder - spil hvor som helst, når som helst.",
  },
  {
    icon: Clock,
    title: "Hurtige Udbetalinger",
    description: "Få dine gevinster hurtigt med pålidelige betalingsmetoder og kort behandlingstid.",
  },
  {
    icon: CreditCard,
    title: "Danske Betalinger",
    description: "Support for MobilePay, Dankort og andre populære danske betalingsløsninger.",
  },
  {
    icon: Users,
    title: "Ekspert Support",
    description: "Professionel kundeservice på dansk og omfattende hjælp til alle spillere.",
  },
]

export default function MobileBookmakers() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hvorfor Vælge Vores Anbefalinger?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Vi tester og vurderer hver betting-side grundigt for at sikre, at du får den bedste oplevelse og sikkerhed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-neon-blue transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-neon-blue/20 p-3 rounded-lg mr-4 group-hover:bg-neon-blue/30 transition-colors">
                    <Icon className="text-neon-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-xl p-8 border border-neon-green/30">
            <h3 className="text-2xl font-bold text-white mb-4">Klar til at Starte?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Vælg en af vores topanbefalede bettingsider og få adgang til de bedste odds, bonusser og en sikker
              spiloplevelse
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("rating-list")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-gradient-to-r from-neon-green to-neon-blue text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
            >
              Se Alle Bettingsider
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
