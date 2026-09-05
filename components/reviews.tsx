import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "Tess planned our honeymoon safari down to the smallest detail. Every camp, every transfer, every sunset was perfect. We didn't lift a finger.",
    name: "Amelia & Jack",
    trip: "Kenya honeymoon",
  },
  {
    quote:
      "Ten days across the Greek islands with zero stress. The villas were stunning and the little dinner recommendations were spot on.",
    name: "The Okafor family",
    trip: "Greek isles",
  },
  {
    quote:
      "I've booked four trips through Bijou Travel now. It's like having a friend who happens to be a world-class travel expert.",
    name: "Priya S.",
    trip: "Maldives & beyond",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Loved by travellers
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
            The kind of trips people talk about for years
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display font-bold text-foreground">
                  {r.name}
                </div>
                <div className="text-sm text-muted-foreground">{r.trip}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
