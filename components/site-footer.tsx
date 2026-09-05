import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-xs">
            <Logo className="items-start text-3xl" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Boutique travel, thoughtfully designed. Proudly based in Fulham,
              sending travellers everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">
                Explore
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#destinations" className="hover:text-primary">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#experiences" className="hover:text-primary">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-primary">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">
                Get in touch
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Fulham Broadway, SW6</li>
                <li>hello@bijoutravel.co.uk</li>
                <li>+44 (0)20 7000 0000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bijou Travel Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
