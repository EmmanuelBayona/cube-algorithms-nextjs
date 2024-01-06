import { LandingNavbar } from "@/components/landing-navbar"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export default function Home() {
    return (
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
        </MaxWidthWrapper>
    )
}
