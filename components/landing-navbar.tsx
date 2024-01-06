import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

export const LandingNavbar = () => {

    return (
        <nav className="h-12 mt-5 flex justify-between items-center">

            <a href="https://emmanuelbayona.dev" target="_blank"
                className="leading-3 text-sm text-violet-100/80"
            >
                made by <br />
                <span className="text-base text-violet-100">Emmanuel</span>
            </a>

            <a href="https://github.com/EmmanuelBayona/cube-algorithms-nextjs" target="_blank"
                className={cn(buttonVariants({ variant: 'primary' }), 'rounded-full')}
            >
                View on GitHub
            </a>

        </nav>
    )

}