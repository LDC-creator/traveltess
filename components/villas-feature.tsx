import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function VillasFeature() {
  return (
    <section id="villas" className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Link
          href="/private-villas"
          className="group block aspect-[4/3] overflow-hidden rounded-3xl"
        >
          <img
            src="/images/villa-hero.jpg"
            alt="Sun-drenched private villa with an infinity pool overlooking the sea"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Private villas, worldwide
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
            A place of your own
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            From secluded Mediterranean hideaways to exceptional Caribbean
            estates, discover a villa that feels entirely your own.
          </p>
          <Link
            href="/private-villas"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent/80"
          >
            Explore the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
