import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export const buttonVariants = cva(
    'text-violet-100 text-base rounded-lg px-4 py-1',
    {
        variants: {
            variant: {
                default: 'border border-dark-accent bg-dark',
                primary: 'border border-brand-accent bg-brand',
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