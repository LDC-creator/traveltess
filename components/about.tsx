import { LinkButton } from "@/components/link-button"

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-3xl sm:aspect-auto sm:h-[480px]">
            <img
              src="/images/about-tess-2.jpeg"
              alt="Tess, founder of Bijou Travel, smiling by the water at a seaside resort"
              className="h-full w-full origin-[center_38%] scale-[1.8] object-cover object-[center_38%] sm:origin-center sm:scale-100 sm:object-[center_20%]"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
            <p className="font-display text-lg font-bold text-foreground">
              Meet Tess
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Founder &amp; lead trip designer
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            A little Fulham studio with a big appetite for the world
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tess has always loved planning her own trips — discovering new
            places, finding beautiful stays and bringing all the little
            details together.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            And with endless choice online and so much inspiration on social
            media, she saw how overwhelming it can be to know where to start,
            and how much easier it is when someone can take that away.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            That&apos;s where Bijou Travel was born. The team at Bijou take
            the time to understand how you love to travel, then thoughtfully
            create trips that feel completely you.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Small by design, personal by nature. Every trip gets our full
            attention, from the first idea to the moment you return home.
          </p>
          <LinkButton
            href="https://wa.me/447495835481"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-7"
          >
            Start a conversation
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
