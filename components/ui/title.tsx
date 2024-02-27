import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const Title = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn("text-2xl lg:text-4xl text-center md:text-start font-medium", className)}
            {...props}
        />
    )
)
Title.displayName = "Title";
