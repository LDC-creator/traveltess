import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Destinations } from "@/components/destinations"
import { VillasFeature } from "@/components/villas-feature"
import { Experiences } from "@/components/experiences"
import { WhyUs } from "@/components/why-us"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Intro />
      <Destinations />
      <VillasFeature />
      <Experiences />
      <WhyUs />
      <About />
      <Reviews />
      <Faq />
      <Contact />
      <SiteFooter />
    </main>
  )
}
