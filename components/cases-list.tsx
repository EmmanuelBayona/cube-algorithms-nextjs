import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"

export const CasesList = ({ className }: { className?: string }) => {

    return (
        <section
            className={cn('flex flex-col gap-5', className)}
        >
            {
                [...Array(10)].map((_, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 flex flex-col lg:flex-row lg:items-center gap-5">

                            <div className="w-40 h-40 bg-white/5 mx-auto md:mx-0" />

                            <div className="tracking-wider text-sm md:text-base flex flex-col gap-5 md:gap-2">
                                <h2 className="text-xl md:text-2xl font-semibold">F2L {i + 1}</h2>
                                <p>D&apos; L B2 U&apos; F2 U&apos; L2 F2 L2 B2 U&apos; R2 D U L&apos; D&apos; U&apos; F L R B</p>
                                <p>D&apos; L B2 U&apos; F2 U&apos; L2 F2 L2 B2 U&apos; R2 D U L&apos; D&apos; U&apos; F L R B</p>
                                <p>D&apos; L B2 U&apos; F2 U&apos; L2 F2 L2 B2 U&apos; R2 D U L&apos; D&apos; U&apos; F L R B</p>
                                <p>D&apos; L B2 U&apos; F2 U&apos; L2 F2 L2 B2 U&apos; R2 D U L&apos; D&apos; U&apos; F L R B</p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </section>
    )

}