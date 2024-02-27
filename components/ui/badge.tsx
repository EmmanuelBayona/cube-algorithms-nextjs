import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

const badgeVariants = cva(
    "inline-flex px-1.5 pt-0.5 pb-1 rounded-full font-semibold text-white/80 text-xs",
    {
        variants: {
            variant: {
                default: 'bg-dark hover:bg-dark/95',
                primary: 'bg-primary hover:bg-primary/95',
                success: 'bg-gradient-to-b from-green-400 to-green-500 border border-green-500',
                danger:  'bg-gradient-to-b from-red-400 to-red-500 border border-red-500',
                warning: 'bg-gradient-to-b from-amber-400 to-amber-500 border border-amber-500',
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)
  

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
    return (
        <div 
            className={cn(badgeVariants({ variant }), className )}
            {...props}
        />
    )
}
Badge.displayName = 'Badge'