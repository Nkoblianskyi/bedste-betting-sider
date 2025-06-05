import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-dark-900">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-white mb-8">Privatlivspolitik</h1>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Dataansvarlig</h2>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <p className="mb-2">
                                    <strong>Bedste Bettingsider Danmark</strong>
                                </p>
                                <p className="mb-2">Email: info@bedstebettingsiderdk.com</p>
                                <p>CVR: [CVR-nummer]</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Hvilke personoplysninger indsamler vi?</h2>

                            <div className="space-y-6">
                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Automatisk indsamlede data</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>IP-adresse</li>
                                        <li>Browsertype og version</li>
                                        <li>Operativsystem</li>
                                        <li>Besøgstidspunkt</li>
                                        <li>Sider du besøger på vores hjemmeside</li>
                                        <li>Henvisende hjemmeside</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Frivilligt angivne data</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Email-adresse (ved kontakt)</li>
                                        <li>Navn (ved kontakt)</li>
                                        <li>Besked indhold (ved kontakt)</li>
                                        <li>Cookie-præferencer</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Hvorfor indsamler vi dine data?</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Lovlige interesser</h3>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Forbedre hjemmesidens funktionalitet</li>
                                        <li>Analysere brugeradfærd for bedre indhold</li>
                                        <li>Sikkerhed og svindelforebyggelse</li>
                                        <li>Affiliate marketing og kommission tracking</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Samtykke</h3>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Marketing cookies</li>
                                        <li>Nyhedsbreve (hvis tilmeldt)</li>
                                        <li>Personaliseret indhold</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Deling af data</h2>
                            <p className="mb-4">Vi deler dine personoplysninger med følgende tredjeparter:</p>
                            <div className="space-y-4">
                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Affiliate partnere</h3>
                                    <p>
                                        Når du klikker på links til bettingsider, kan vi dele anonymiserede data for at spore henvisninger
                                        og modtage kommission.
                                    </p>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Analyseværktøjer</h3>
                                    <p>Vi bruger Google Analytics og lignende tjenester til at analysere hjemmesidens brug.</p>
                                </div>

                                <div className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-neon-blue mb-3">Hosting og tekniske tjenester</h3>
                                    <p>Vores hjemmeside hostes af tredjeparter, som kan have adgang til tekniske data.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Dine rettigheder</h2>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <p className="mb-4">Under GDPR har du følgende rettigheder:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>
                                        <strong>Ret til indsigt:</strong> Du kan anmode om at se, hvilke data vi har om dig
                                    </li>
                                    <li>
                                        <strong>Ret til berigtigelse:</strong> Du kan få rettet forkerte oplysninger
                                    </li>
                                    <li>
                                        <strong>Ret til sletning:</strong> Du kan anmode om at få slettet dine data
                                    </li>
                                    <li>
                                        <strong>Ret til begrænsning:</strong> Du kan begrænse behandlingen af dine data
                                    </li>
                                    <li>
                                        <strong>Ret til dataportabilitet:</strong> Du kan få dine data i et struktureret format
                                    </li>
                                    <li>
                                        <strong>Ret til indsigelse:</strong> Du kan gøre indsigelse mod behandlingen
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Opbevaring af data</h2>
                            <p className="mb-4">
                                Vi opbevarer dine personoplysninger så længe, det er nødvendigt for de formål, de blev indsamlet til:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Analytiske data: Op til 26 måneder</li>
                                <li>Cookie-præferencer: 12 måneder</li>
                                <li>Kontaktoplysninger: 3 år efter sidste kontakt</li>
                                <li>Tekniske logfiler: 12 måneder</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neon-green mb-4">Sikkerhed</h2>
                            <p className="mb-4">
                                Vi tager datasikkerhed seriøst og har implementeret passende tekniske og organisatoriske
                                foranstaltninger for at beskytte dine personoplysninger mod uautoriseret adgang, tab eller misbrug.
                            </p>
                        </section>

                        <section className="bg-gray-800 rounded-lg p-6">
                            <p className="text-sm text-gray-400">
                                Denne privatlivspolitik blev sidst opdateret: {new Date().toLocaleDateString("da-DK")}
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
