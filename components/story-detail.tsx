import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import type { StoryEntry } from "@/lib/content"

export function StoryDetail({
  entry,
  backHref,
  backLabel,
}: {
  entry: StoryEntry
  backHref: string
  backLabel: string
}) {
  return (
    <article>
      <div className="relative h-[46vh] min-h-[360px] max-h-[520px] w-full overflow-hidden sm:h-[55vh]">
        <img
          src={entry.image}
          alt={entry.alt}
          style={{ objectPosition: entry.imagePosition }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12">
          <div className="mx-auto w-full max-w-4xl">
            <Link
              href={backHref}
              className="flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>

            <span className="mt-5 flex w-fit items-center gap-2 rounded-full bg-background/90 px-4 py-1.5 text-sm font-medium text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {entry.location}
            </span>

            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
              {entry.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-balance font-display text-2xl leading-snug text-foreground sm:text-3xl">
            {entry.tagline}
          </p>

          <div className="mt-8 space-y-5">
            {entry.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {entry.closing && (
            <p className="mt-8 text-balance font-display text-xl italic text-foreground">
              {entry.closing}
            </p>
          )}

          {entry.bestFor.length > 0 && (
            <div className="mt-10 border-t border-border pt-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Best for
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-2xl font-bold sm:text-3xl">
            Make it yours
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
            {entry.makeItYours}
          </p>
          <LinkButton
            href="https://wa.me/447495835481"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Start a conversation
          </LinkButton>
        </div>
      </div>
    </article>
  )
}
