import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-xl border border-white/5 bg-dark px-3 py-2 text-sm text-white placeholder-white/80 ring-offset-white/5 file:border-0 file:bg-dark file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-dark focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
