import { LandingGrid } from "@/components/landing-grid"
import { LandingNavbar } from "@/components/landing-navbar"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
    return (
        <div className="relative min-h-screen w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden='true' />
            <MaxWidthWrapper className="text-violet-100 pt-5 relative">
                <LandingNavbar />
                <h1
                    className="mt-10 text-center text-6xl md:text-8xl lg:text-9xl font-semibold drop-shadow-text tracking-tight"
                >
                    Cube <br /> algorithms
                </h1>

                <p className="mt-7 md:mt-10 text-center text-xl mx-auto max-w-xs">
                    A collection of algorithms for solving the Rubik&apos;s cube
                </p>

                <div className="flex justify-center mt-20">
                    <Link href="/dash/puzzles"
                        className={cn(buttonVariants({ variant: 'primary' }))}
                    >
                        Get started
                        <ArrowRightIcon width={24} height={24} />
                    </Link>
                </div>

                <LandingGrid />

            </MaxWidthWrapper>
        </div>
    )
}
