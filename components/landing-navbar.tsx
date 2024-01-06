import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

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
                className={cn(buttonVariants({ variant: 'primary' }), 'rounded-full flex gap-2 pl-1')}
            >
                <GitHubLogoIcon width={24} height={24} />
                View on GitHub
            </a>

        </nav>
    )

}