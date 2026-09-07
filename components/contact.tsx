"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone } from "lucide-react"

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Request failed")

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid lg:grid-cols-2">
          <div className="bg-primary p-8 text-primary-foreground sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Let&apos;s talk
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
              Start planning your next adventure
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
              Tell us a little about the trip you have in mind and we&apos;ll
              be in touch to start shaping it together.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0" />
                Fulham Broadway, London SW6
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                +44 7495 835481
              </li>
            </ul>
          </div>

          <form className="p-8 sm:p-12" onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Traveller"
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="destination">Where would you like to go?</Label>
                <Input
                  id="destination"
                  name="destination"
                  placeholder="Safari, Maldives, somewhere new..."
                  disabled={status === "submitting"}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Tell us more</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Dates, travellers, the kind of trip you're dreaming of..."
                  required
                  disabled={status === "submitting"}
                />
              </div>

              {/* honeypot field, hidden from real visitors */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send enquiry"}
              </Button>

              {status === "success" && (
                <p className="text-sm font-medium text-primary">
                  Thanks — your message is on its way. We&apos;ll be in touch
                  soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-destructive">
                  Something went wrong sending your message. Please try again
                  or call us directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
