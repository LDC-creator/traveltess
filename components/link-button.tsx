import type { ComponentProps } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

type LinkButtonProps = ComponentProps<"a"> & VariantProps<typeof buttonVariants>

export function LinkButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
