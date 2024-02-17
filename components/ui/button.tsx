import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export const buttonVariants = cva(
    'text-font text-base rounded-lg px-4 py-2 flex items-center justify-center gap-2',
    {
        variants: {
            variant: {
                default: 'bg-dark shadow-dark-button',
                primary: 'bg-gradient-to-b from-primary to-[#4417B6] shadow-primary-button [text-shadow:0_0_0.5px_rgb(255,255,255)]',
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ className, variant }))}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'
