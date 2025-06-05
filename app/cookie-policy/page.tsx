import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-dark-900">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Hvad er cookies?</h2>
                            <p className="mb-4">
                                Cookies er små tekstfiler, der gemmes på din computer eller mobile enhed, når du besøger vores
                                hjemmeside. De hjælper os med at gøre hjemmesiden mere brugervenlig og give dig en bedre oplevelse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Hvilke cookies bruger vi?</h2>

                            <div className="space-y-6">
                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Nødvendige cookies</h3>
                                    <p className="mb-2">
                                        Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. De kan ikke slås fra.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Session cookies for navigation</li>
                                        <li>Sikkerhedscookies</li>
                                        <li>Cookie-samtykke præferencer</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Analytiske cookies</h3>
                                    <p className="mb-2">Disse cookies hjælper os med at forstå, hvordan besøgende bruger hjemmesiden.</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Google Analytics</li>
                                        <li>Besøgsstatistikker</li>
                                        <li>Brugeradfærd på siden</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Marketing cookies</h3>
                                    <p className="mb-2">
                                        Disse cookies bruges til at vise relevante annoncer og spore effektiviteten af vores
                                        marketingkampagner.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Affiliate tracking</li>
                                        <li>Retargeting pixels</li>
                                        <li>Konverteringssporing</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Hvordan administrerer du cookies?</h2>
                            <p className="mb-4">Du kan til enhver tid ændre dine cookie-præferencer ved at:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Slette cookies i din browsers indstillinger</li>
                                <li>Blokere cookies i din browser</li>
                                <li>Bruge inkognito/privat browsing mode</li>
                                <li>Kontakte os for at få hjælp</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Tredjepartscookies</h2>
                            <p className="mb-4">Vores hjemmeside kan indeholde cookies fra tredjeparter som:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Google Analytics for statistik</li>
                                <li>Sociale medier widgets</li>
                                <li>Affiliate partnere</li>
                                <li>Reklamenetværk</li>
                            </ul>
                        </section>

                        <section className="bg-gray-800 rounded-lg p-6">
                            <p className="text-sm text-gray-400">
                                Denne cookie policy blev sidst opdateret: {new Date().toLocaleDateString("da-DK")}
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
