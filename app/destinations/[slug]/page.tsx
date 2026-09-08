import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StoryDetail } from "@/components/story-detail"
import { destinations, findDestination } from "@/lib/content"

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = findDestination(slug)
  if (!entry) return {}

  return {
    title: entry.name,
    description: entry.blurb,
    openGraph: {
      title: entry.name,
      description: entry.blurb,
      images: [{ url: entry.image }],
    },
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = findDestination(slug)
  if (!entry) notFound()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <StoryDetail
        entry={entry}
        backHref="/#destinations"
        backLabel="Back to destinations"
      />
      <SiteFooter />
    </main>
  )
}
