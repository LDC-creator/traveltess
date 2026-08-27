import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Experiences } from "@/components/experiences"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Destinations />
      <Experiences />
      <About />
      <Reviews />
      <Contact />
      <SiteFooter />
    </main>
  )
}
