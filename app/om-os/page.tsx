import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Om Os</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-neon-green mb-4">Hvem vi er</h2>
              <p className="mb-4">
                Vi er et team af erfarne gambling-eksperter, der har dedikeret os til at hjælpe danske spillere med at
                finde de bedste og mest sikre bettingsider. Med over 10 års erfaring i branchen, forstår vi, hvad der
                gør en betting-oplevelse exceptionel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-green mb-4">Hvordan vi tester</h2>
              <p className="mb-4">
                Vores testproces er grundig og omfattende. Vi evaluerer hver betting-side baseret på:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sikkerhed og licenser fra anerkendte myndigheder</li>
                <li>Bonusbetingelser og deres retfærdighed</li>
                <li>Brugervenlighed på både desktop og mobil</li>
                <li>Udbetalingshastighed og kundeservice</li>
                <li>Spilleudvalg og odds-kvalitet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-green mb-4">Vores principper</h2>
              <p className="mb-4">
                Transparens og ærlighed er kernen i alt, hvad vi gør. Vi modtager kommission fra nogle af de operatører,
                vi anmelder, men dette påvirker aldrig vores vurderinger. Vores anmeldelser er baseret udelukkende på
                faktiske tests og brugeroplevelser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-green mb-4">Ansvarligt spil</h2>
              <p className="mb-4">
                Vi tager ansvarligt spil meget seriøst. Gambling skal være underholdning, ikke en måde at løse
                økonomiske problemer på. Vi opfordrer alle spillere til at sætte grænser og søge hjælp, hvis gambling
                bliver et problem.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
