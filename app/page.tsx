import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Destinations } from "@/components/destinations"
import { Experiences } from "@/components/experiences"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Intro />
      <Destinations />
      <Experiences />
      <About />
      <Reviews />
      <Contact />
      <Newsletter />
      <SiteFooter />
    </main>
  )
}
