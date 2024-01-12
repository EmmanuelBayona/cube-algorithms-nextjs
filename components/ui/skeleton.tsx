import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const Skeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props}, ref) => (
        <div 
            ref={ref}
            className={cn('relative isolate space-y-5 overflow-hidden rounded-2xl bg-dark border border-dark-accent p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-violet-100/10 before:bg-gradient-to-r before:from-transparent before:via-violet-100/10 before:to-transparent', className)}
            {...props}
        >
            <div className="space-y-3">
                <div className="h-5 w-4/5 rounded-lg bg-violet-100/20"></div>
                <div className="h-3 w-3/5 rounded-lg bg-violet-100/10"></div>
            </div>
            <div className="h-28 rounded-lg bg-violet-100/10" />
        </div>
    )
)

Skeleton.displayName = 'Skeleton'