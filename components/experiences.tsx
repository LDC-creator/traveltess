import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Truly tailor-made",
    body: "No templates, no packages. Every journey is built from scratch around your pace, taste and budget.",
  },
  {
    icon: HeartHandshake,
    title: "A personal specialist",
    body: "You'll work one-to-one with the same expert from first idea to final farewell, so nothing gets lost.",
  },
  {
    icon: ShieldCheck,
    title: "Booked with confidence",
    body: "Fully protected trips and 24/7 support on the ground, wherever in the world you happen to be.",
  },
  {
    icon: Compass,
    title: "Local knowledge",
    body: "Hand-tested hotels and the little-known spots that turn a good trip into the trip of a lifetime.",
  },
]

export function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Bijou Travel
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
            The care of a boutique, the reach of the world
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            We&apos;re a small Fulham-based team that believes great travel starts
            with a real conversation — not a shopping cart.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-background/10 p-6 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
