import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export const buttonVariants = cva(
    'text-font text-base rounded-lg flex items-center justify-center gap-2',
    {
        variants: {
            variant: {
                default: 'bg-dark shadow-dark-button',
                primary: 'bg-gradient-to-b from-primary to-[#4417B6] shadow-primary-button [text-shadow:0_0_0.5px_rgb(255,255,255)]',
                success: 'bg-gradient-to-b from-green-400 to-green-500 border border-green-500',
                danger: 'bg-gradient-to-b from-red-400 to-red-500 border border-red-500',
                warning: 'bg-gradient-to-b from-amber-400 to-amber-500 border border-amber-500',
            },
            size: {
                default: 'px-4 py-2',
                icon: 'w-8 h-8 p-2'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ className, variant, size }))}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'
