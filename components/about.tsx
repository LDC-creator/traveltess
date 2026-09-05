import { LinkButton } from "@/components/link-button"

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/about-tess-2.jpeg"
              alt="Tess, founder of Bijou Travel, smiling by the water at a seaside resort"
              className="h-[480px] w-full object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
            <p className="font-display text-lg font-bold text-foreground">
              Meet Tess
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Founder &amp; lead trip designer, 12 years and 60+ countries in.
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our story
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            A little Fulham studio with a big appetite for the world
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Bijou Travel began with a simple idea: that the best trips aren&apos;t
            pulled off a shelf, they&apos;re built around the people taking them.
            From our studio just off Fulham Broadway, we spend our days matching
            travellers with the places, stays and experiences they&apos;ll never
            stop talking about.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We keep our books deliberately small so every client gets our full
            attention — from the first flat white to the postcard home.
          </p>
          <LinkButton href="#contact" size="lg" className="mt-7">
            Start a conversation
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
