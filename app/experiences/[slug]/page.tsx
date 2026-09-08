import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StoryDetail } from "@/components/story-detail"
import { experiences, findExperience } from "@/lib/content"

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = findExperience(slug)
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

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = findExperience(slug)
  if (!entry) notFound()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <StoryDetail
        entry={entry}
        backHref="/#experiences"
        backLabel="Back to experiences"
      />
      <SiteFooter />
    </main>
  )
}
