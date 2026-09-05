import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-primary px-4 py-12 text-primary-foreground sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-xl font-semibold">
              A world of travel in your inbox
            </h2>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Fresh trip ideas and inspiration, delivered every so often — no
              spam, ever.
            </p>
          </div>

          <form className="grid w-full max-w-xl gap-3 sm:grid-cols-[1fr_1fr_1fr_auto]">
            <Input
              aria-label="First name"
              placeholder="First name"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Input
              aria-label="Last name"
              placeholder="Last name"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Input
              type="email"
              aria-label="Email"
              placeholder="Email"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button type="submit" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
