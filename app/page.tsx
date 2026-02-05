import { HeroSection } from "@/components/hero-section"
import { PrizeSection } from "@/components/prize-section"
import { InfoSection } from "@/components/info-section"
import { AgendaSection } from "@/components/agenda-section"
import { JudgingSection } from "@/components/judging-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function EventPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PrizeSection />
      <InfoSection />
      <AgendaSection />
      <JudgingSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
