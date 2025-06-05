export default function ResponsibleGambling() {
  return (
    <section id="ansvarligt-spil" className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Ansvarligt Spil</h2>
            <p className="text-white text-lg mb-6">
              Gambling skal være sjovt. Hvis du føler, at du mister kontrollen, kontakt venligst StopSpillet eller
              ROFUS.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://stopspillet.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Læs mere
              </a>
              <a
                href="https://rofus.nu"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                ROFUS.nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
