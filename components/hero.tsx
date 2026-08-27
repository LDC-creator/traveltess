import { LinkButton } from "@/components/link-button"
import { MapPin, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/hero-tropical.png"
            alt="Aerial view of a turquoise tropical lagoon meeting a white sand beach"
            className="h-[520px] w-full object-cover sm:h-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-1.5 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Boutique travel, based in Fulham
              </span>
              <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] text-background sm:text-6xl">
                Journeys crafted for the way you love to travel
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-background/90 sm:text-lg">
                From sunrise safaris to barefoot beach escapes, TravelTess designs
                bespoke trips down to the last detail — so all you have to do is
                arrive.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <LinkButton href="#destinations" size="lg" className="rounded-full">
                  Explore destinations
                </LinkButton>
                <LinkButton
                  href="#contact"
                  size="lg"
                  variant="secondary"
                  className="rounded-full bg-background/90 text-foreground hover:bg-background"
                >
                  Speak to a specialist
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "12+", label: "Years crafting trips" },
            { value: "60+", label: "Countries covered" },
            { value: "4.9", label: "Average rating", icon: true },
            { value: "100%", label: "Tailor-made" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 text-center"
            >
              <div className="flex items-center justify-center gap-1 font-display text-3xl font-bold text-foreground">
                {stat.value}
                {stat.icon && (
                  <Star className="h-5 w-5 fill-accent text-accent" />
                )}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
