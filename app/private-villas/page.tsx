import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LinkButton } from "@/components/link-button"
import { villaSteps, villasUrl, villasUrlIsExternal } from "@/lib/villas"

const title = "Private Villas Worldwide"
const description =
  "Exceptional private villas, chosen around you. Discover sun-drenched Mediterranean hideaways, expansive Caribbean villas and beautiful homes for gathering with family and friends, with Bijou Travel of Fulham, London."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/private-villas" },
  openGraph: {
    title: `${title} | Bijou Travel`,
    description,
    url: "/private-villas",
    images: [{ url: "/images/villa-hero.jpg" }],
  },
}

const gallery = [
  {
    src: "/images/villa-caribbean.jpg",
    alt: "Aerial view of white beachfront villas among palms beside turquoise Caribbean water",
    caption: "Caribbean estates",
    position: "30% center",
  },
  {
    src: "/images/villa-interior.jpg",
    alt: "Bright villa living room with sunken sofas and floor-to-ceiling windows opening onto a pool and the sea",
    caption: "Gatherings with family and friends",
    position: "58% center",
  },
  {
    src: "/images/villa-escape.jpg",
    alt: "Two glasses of rosé on a poolside table between sun loungers overlooking a villa pool and the sea",
    caption: "An escape for two",
    position: "center",
  },
]

function VillasButton({ className }: { className?: string }) {
  return (
    <LinkButton
      href={villasUrl}
      size="lg"
      className={className}
      {...(villasUrlIsExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      Explore private villas
      <ArrowUpRight className="ml-1 h-4 w-4" />
    </LinkButton>
  )
}

export default function PrivateVillasPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="relative h-[46vh] min-h-[360px] max-h-[520px] w-full overflow-hidden sm:h-[55vh]">
        <img
          src="/images/villa-hero.jpg"
          alt="Sun-drenched private villa with an infinity pool overlooking the sea"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12">
          <div className="mx-auto w-full max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              The Bijou Collection
            </span>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
              A place of your own.
            </h1>
          </div>
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-balance font-display text-2xl leading-snug text-foreground sm:text-3xl">
            Exceptional private villas, chosen around you.
          </p>
          <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Some holidays call for a little more space, a slower pace and
              somewhere that feels entirely your own.
            </p>
            <p>
              From sun-drenched Mediterranean hideaways to expansive Caribbean
              villas and beautiful homes for gathering with family and friends,
              discover a world of private stays for every kind of escape.
            </p>
            <p>
              Whether you&apos;re planning a family holiday, a celebration with
              friends or a special escape for two, we&apos;ll help you find a
              villa that feels just right.
            </p>
          </div>
          <p className="mt-8 font-display text-xl italic text-foreground">
            Explore the collection and find your next stay.
          </p>
          <VillasButton className="mt-7" />
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-3">
          {gallery.map((img) => (
            <figure key={img.src} className="relative overflow-hidden rounded-3xl">
              <img
                src={img.src}
                alt={img.alt}
                style={{ objectPosition: img.position }}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 font-display text-xl font-semibold text-white">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How it works
          </span>
          <h2 className="mt-2 max-w-xl text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            From first look to booked
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {villaSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <span className="font-display text-4xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-2xl font-bold sm:text-3xl">
            Find your next stay
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
            Browse the collection, then send us your shortlist and we&apos;ll
            take care of the rest.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <VillasButton className="bg-accent text-accent-foreground hover:bg-accent/90" />
            <LinkButton
              href="https://wa.me/447495835481"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Message us on WhatsApp
            </LinkButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
