import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex flex-col items-center text-2xl text-black",
        className
      )}
    >
      <span className="font-[family-name:var(--font-logo)] text-[1em] font-black leading-none tracking-tight">
        BIJOU
      </span>
      <span className="mt-1 font-sans text-[0.22em] font-normal tracking-[0.5em] pl-[0.5em]">
        TRAVEL
      </span>
    </span>
  )
}
