import { Shield, Award, Smartphone, Clock, CreditCard } from "lucide-react"

const trustFactors = [
  {
    icon: Shield,
    title: "Sikkerhed & licens",
    description: "Vi tjekker alle licenser og sikkerhedsforanstaltninger",
  },
  {
    icon: Award,
    title: "Bonusbetingelser",
    description: "Gennemgang af alle bonusvilkår og omsætningskrav",
  },
  {
    icon: Smartphone,
    title: "Brugervenlighed",
    description: "Test af hjemmeside og app-funktionalitet",
  },
  {
    icon: Clock,
    title: "Mobiloplevelse",
    description: "Optimering og hastighed på mobile enheder",
  },
  {
    icon: CreditCard,
    title: "Udbetalingshastighed",
    description: "Hvor hurtigt får du dine gevinster udbetalt",
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hvorfor stole på os?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Vores eksperter bruger disse kriterier til at rangere bettingsider
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <div
                key={index}
                className="bg-dark-700 rounded-xl p-6 border border-gray-600 hover:border-neon-blue transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-neon-blue/20 p-3 rounded-lg mr-4 group-hover:bg-neon-blue/30 transition-colors">
                    <Icon className="text-neon-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{factor.title}</h3>
                </div>
                <p className="text-gray-300">{factor.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
