import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

/**
 * @example
 * <Card>
 *      <CardHeader>
 *          <CardTitle>Title</CardTitle>
 *          <CardDescription> Some Description </CardDescription>
 *      </CardHeader>
 *      <CardContent>
 *          <p>Some content</p>
 *      </CardContent>
 *      <CardFooter>
 *          <p>Some footer</p>
 *      </CardFooter>
 * </Card>
 */

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'rounded-3xl text-violet-100 bg-dark shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02),inset_0_0_0_1px_rgba(255,255,255,0.02),0_0_0_1px_rgba(0,0,0,0.25)]',
                className
            )}
            {...props}
        />
    )
)
Card.displayName = 'Card'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex flex-col space-y-1.5 p-6', className)}
            {...props}
        />
    )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
            {...props}
        />
    )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn('text-sm text-violet-100/80', className)}
            {...props}
        />
    )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('p-6 pt-0', className)}
            {...props}
        />
    )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex items-center p-6 pt-0', className)}
            {...props}
        />
    )
)
CardFooter.displayName = 'CardFooter'
