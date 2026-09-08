import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { experiences } from "@/lib/content"

export function Experiences() {
  return (
    <section id="experiences" className="bg-muted px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Signature moments
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
              Experiences worth crossing the world for
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            The moments that turn a good trip into one you'll talk about for
            years.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => (
            <Link
              href={`/experiences/${e.slug}`}
              key={e.slug}
              className={`group relative overflow-hidden rounded-3xl border border-border ${
                e.span ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={e.image || "/placeholder.svg"}
                alt={e.alt}
                style={{ objectPosition: e.imagePosition }}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                {e.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-background">
                    {e.name}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {e.location}
                </p>
                <p className="mt-2 max-w-md text-pretty text-sm text-background/85">
                  {e.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
