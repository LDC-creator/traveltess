import { Plus } from "lucide-react"
import { faqs } from "@/lib/faqs"

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <section id="faq" className="bg-muted px-4 py-20 sm:px-6 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Good to know
        </span>
        <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
          Your travel agent in Fulham, serving west London
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {f.question}
                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
