import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
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
              Tell us a little about the trip you have in mind and we&apos;ll be in
              touch within one working day to start shaping it together.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0" />
                Fulham Broadway, London SW6
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                +44 (0)20 7000 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                hello@bijoutravel.co.uk
              </li>
            </ul>
          </div>

          <form className="p-8 sm:p-12">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" placeholder="Jane Traveller" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="destination">Where would you like to go?</Label>
                <Input
                  id="destination"
                  name="destination"
                  placeholder="Safari, Maldives, somewhere new..."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Tell us more</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Dates, travellers, the kind of trip you're dreaming of..."
                />
              </div>
              <Button type="submit" size="lg">
                Send enquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
