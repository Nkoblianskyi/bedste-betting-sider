import { BarChart3, PieChart, TrendingUp } from "lucide-react"

const analysisData = [
  { category: "Sikkerhed", score: 95, color: "bg-neon-green" },
  { category: "Bonusser", score: 88, color: "bg-neon-blue" },
  { category: "Brugervenlighed", score: 92, color: "bg-neon-purple" },
  { category: "Mobilapp", score: 85, color: "bg-neon-pink" },
  { category: "Kundeservice", score: 90, color: "bg-neon-yellow" },
]

export default function AnalysisTool() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BarChart3 className="text-neon-purple animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Vores Analyseværktøj</h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Sådan scorer vi Danmarks bedste bettingsider</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Analysis Bars */}
            <div className="space-y-6">
              {analysisData.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <span className="text-neon-blue font-bold">{item.score}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pie Chart Representation */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple opacity-20 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="text-neon-blue mx-auto mb-2" size={48} />
                    <div className="text-3xl font-bold text-white">4.8</div>
                    <div className="text-neon-green">Gennemsnit</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="flex items-center justify-center space-x-2 text-neon-green">
                  <TrendingUp size={20} />
                  <span className="font-semibold">Konstant forbedring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
