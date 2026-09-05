"use client"

import { useState } from "react"
import { LinkButton } from "@/components/link-button"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center">
          <Logo className="text-3xl text-primary-foreground" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton
            href="#contact"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Plan your trip
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <LinkButton
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Plan your trip
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  )
}
