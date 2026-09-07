import { MessageCircle } from "lucide-react"

const PHONE_DISPLAY = "+44 (0)20 7000 0000"
const WHATSAPP_HREF = "https://wa.me/442070000000"

export function SpecialistCard() {
  return (
    <div className="absolute right-4 top-4 z-10 flex items-center gap-3 rounded-2xl bg-card/95 p-3 pr-4 shadow-lg backdrop-blur-sm sm:right-6 sm:top-6 sm:p-4 sm:pr-5">
      <img
        src="/images/about-tess-2.jpeg"
        alt="Tess, your Bijou Travel specialist"
        className="h-11 w-11 shrink-0 rounded-full object-cover object-[center_30%] sm:h-14 sm:w-14"
      />
      <div>
        <p className="text-xs font-semibold text-foreground sm:text-sm">
          Talk to a specialist
        </p>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {PHONE_DISPLAY}
        </p>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline sm:text-sm"
        >
          <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Chat now
        </a>
      </div>
    </div>
  )
}
