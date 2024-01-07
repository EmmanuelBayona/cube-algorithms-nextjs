import { LandingGrid } from "@/components/landing-grid"
import { LandingNavbar } from "@/components/landing-navbar"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
    return (
        <div className="bg-purple-gradient pt-5 min-h-screen">
            <MaxWidthWrapper className="text-violet-100">
                <LandingNavbar />
                <h1
                    className="mt-16 md:mt-20 text-center text-6xl md:text-8xl lg:text-9xl font-semibold drop-shadow-text tracking-tight"
                >
                    Cube <br /> algorithms
                </h1>

                <p className="mt-7 md:mt-10 text-center text-xl mx-auto max-w-xs">
                    A collection of algorithms for solving the Rubik&apos;s cube
                </p>

                <div className="flex justify-center mt-20">
                    <Link href="/dash/timer"
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
