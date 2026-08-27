import { ArrowUpRight } from "lucide-react"

const destinations = [
  {
    name: "African Safari",
    location: "Kenya · Tanzania · Botswana",
    image: "/images/dest-safari.png",
    alt: "Elephants and giraffes crossing the savanna at golden hour",
    blurb: "Big-five game drives, luxury tented camps and unforgettable sunrises.",
    tag: "Adventure",
    span: true,
  },
  {
    name: "Beach Escapes",
    location: "Maldives · Seychelles",
    image: "/images/dest-beach.png",
    alt: "Overwater villa above a turquoise lagoon",
    blurb: "Overwater villas and barefoot luxury on the world's finest shores.",
    tag: "Relax",
  },
  {
    name: "Greek Isles",
    location: "Santorini · Mykonos",
    image: "/images/dest-santorini.png",
    alt: "Whitewashed buildings with blue domes above the Aegean sea",
    blurb: "Sun-drenched villages, cliffside villas and endless blue horizons.",
    tag: "Culture",
  },
  {
    name: "Alpine Retreats",
    location: "Switzerland · Italy",
    image: "/images/dest-alps.png",
    alt: "Turquoise glacial mountain lake reflecting snow-capped peaks",
    blurb: "Crisp mountain air, glacial lakes and grand alpine lodges.",
    tag: "Nature",
    span: true,
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Where to next
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
              Handpicked destinations, endless possibilities
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            Every itinerary is designed around you. Here are a few of the places
            our travellers fall in love with.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article
              key={d.name}
              className={`group relative overflow-hidden rounded-3xl border border-border ${
                d.span ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={d.image || "/placeholder.svg"}
                alt={d.alt}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                {d.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-background">
                    {d.name}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {d.location}
                </p>
                <p className="mt-2 max-w-md text-pretty text-sm text-background/85">
                  {d.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
