"use client"

import { useState } from "react"
import { LinkButton } from "@/components/link-button"
import { Menu, X, Compass } from "lucide-react"

const links = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Compass className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            TravelTess
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="#contact" className="rounded-full">
            Plan your trip
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <LinkButton
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full"
            >
              Plan your trip
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  )
}
