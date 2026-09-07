import { MessageCircle } from "lucide-react"

const PHONE_DISPLAY = "+44 7495 835481"
const WHATSAPP_HREF = "https://wa.me/447495835481"

export function SpecialistCard() {
  return (
    <div className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-xl bg-card/95 p-2 pr-3 shadow-lg backdrop-blur-sm sm:right-6 sm:top-6 sm:gap-3 sm:rounded-2xl sm:p-4 sm:pr-5">
      <img
        src="/images/about-tess-2.jpeg"
        alt="Tess, your Bijou Travel specialist"
        className="h-8 w-8 shrink-0 rounded-full object-cover object-[center_30%] sm:h-14 sm:w-14"
      />
      <div>
        <p className="text-[11px] font-semibold leading-tight text-foreground sm:text-sm">
          Talk to a specialist
        </p>
        <p className="text-[11px] leading-tight text-muted-foreground sm:text-sm">
          {PHONE_DISPLAY}
        </p>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold leading-tight text-primary hover:underline sm:text-sm"
        >
          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
          Chat now
        </a>
      </div>
    </div>
  )
}
