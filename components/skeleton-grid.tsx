import { cn } from "@/lib/utils"
import { Skeleton } from "./ui/skeleton"

export const SkeletonGrid = ({ className }: { className?: string }) => {

    return (
        <section
            className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}
        >

            {
                [...Array(6)].map((_, i) => <Skeleton key={i} />)
            }

        </section>
    )

}
