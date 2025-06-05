import Link from "next/link"
import Image from "next/image"

const organizations = [
  {
    name: "Spillemyndigheden",
    url: "https://spillemyndigheden.dk",
    logo: "/spillemyn.svg",
  },
  {
    name: "StopSpillet",
    url: "https://stopspillet.dk",
    logo: "/stopSpillet.png",
  },
  {
    name: "ROFUS",
    url: "https://rofus.nu",
    logo: "/rofus.png",
  },
  {
    name: "GambleAware",
    url: "https://gambleaware.org",
    logo: "/gamble.webp",
  },
  {
    name: "GameCare",
    url: "https://gamecare.org.uk",
    logo: "/gamecare.svg",
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and 18+ */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex flex-row gap-4 items-center justify-items-center">
            <Image src={'/logo.png'} alt="Top Bettingsider i Danmark" width={50} height={50} />
            <div className="text-3xl font-bold text-neon-green">Bedste Bettingsider</div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Vi er Danmarks førende platform for betting-anmeldelser. Vores ekspertteam tester og vurderer alle
              bettingsider for at hjælpe dig med at finde de bedste og mest sikre spilleoplevelser.
            </p>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-bold inline-block shadow-lg">
              18+
            </div>
          </div>

          {/* Organizations */}
          <div className="text-center">
            <h3 className="text-white font-bold text-xl mb-6">Ansvarligt Spil Partnere</h3>
            <div className="org-logos grid grid-cols-2 gap-4">
              {organizations.map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-500 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Image
                    src={org.logo || "/placeholder.svg"}
                    alt={org.name}
                    width={120}
                    height={40}
                    className="mx-auto object-contain filter group-hover:grayscale-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-xl mb-6">Hurtige Links</h3>
            <div className="space-y-3">
              <Link href="/om-os" className="block text-gray-200 hover:text-neon-blue transition-colors text-lg">
                Om Os
              </Link>
              <Link
                href="/cookie-policy"
                className="block text-gray-200 hover:text-neon-blue transition-colors text-lg"
              >
                Cookie Policy
              </Link>
              <Link
                href="/privatlivspolitik"
                className="block text-gray-200 hover:text-neon-blue transition-colors text-lg"
              >
                Privatlivspolitik
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-700 pt-8 space-y-6">
          <div className="disclaimer-text bg-gray-800/50 rounded-xl p-6 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p className="font-semibold text-neon-blue">
              bedstebettingsiderdk.com kan modtage kompensation når du klikker på links og tilmelder dig hos vores
              partnere. Vores vurderinger er dog uafhængige og baseret på grundige tests og research.
            </p>
            <p className="text-red-400 font-semibold">
              Gambling kan være vanedannende. Spil ansvarligt og kontakt StopSpillet, hvis du har problemer.
            </p>
          </div>
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} Bedste Bettingsider Danmark. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  )
}
