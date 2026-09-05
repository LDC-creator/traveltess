"use client"

import { useState } from "react"
import { LinkButton } from "@/components/link-button"
import { MapPin, Star } from "lucide-react"

const heroClips = [
  "/videos/hero-tropical.mp4",
  "/videos/hero-safari.mp4",
  "/videos/hero-santorini.mp4",
]

export function Hero() {
  const [clipIndex, setClipIndex] = useState(0)

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative h-[55vh] min-h-[400px] max-h-[560px] w-full overflow-hidden">
        <video
          key={heroClips[clipIndex]}
          className="h-full w-full object-cover"
          src={heroClips[clipIndex]}
          poster={clipIndex === 0 ? "/images/hero-tropical.png" : undefined}
          autoPlay
          muted
          playsInline
          onEnded={() =>
            setClipIndex((i) => (i + 1) % heroClips.length)
          }
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-1.5 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Boutique travel, based in Fulham
              </span>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
                Small Details Beautiful Journeys
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
                Tailor-made travel, thoughtfully designed around you.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <LinkButton href="#destinations" size="lg">
                  Explore destinations
                </LinkButton>
                <LinkButton
                  href="#contact"
                  size="lg"
                  variant="secondary"
                  className="bg-background/90 text-foreground hover:bg-background"
                >
                  Speak to a specialist
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "12+", label: "Years crafting trips" },
            { value: "60+", label: "Countries covered" },
            { value: "4.9", label: "Average rating", icon: true },
            { value: "100%", label: "Tailor-made" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 text-center"
            >
              <div className="flex items-center justify-center gap-1 font-display text-3xl font-bold text-foreground">
                {stat.value}
                {stat.icon && (
                  <Star className="h-5 w-5 fill-accent text-accent" />
                )}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
