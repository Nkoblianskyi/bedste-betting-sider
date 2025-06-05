import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import RatingList from "@/components/rating-list"
import DagensBonus from "@/components/dagens-bonus"
import MobileBookmakers from "@/components/mobile-bookmakers"
import AnalysisTool from "@/components/analysis-tool"
import UserReviews from "@/components/user-reviews"
import TrustSection from "@/components/trust-section"
import ResponsibleGambling from "@/components/responsible-gambling"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RatingList />
        <MobileBookmakers />
        <AnalysisTool />
        <UserReviews />
        <TrustSection />
        <ResponsibleGambling />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
