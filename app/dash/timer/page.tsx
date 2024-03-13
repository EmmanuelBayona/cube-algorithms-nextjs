import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { AverageTimes } from "@/components/timer/average-times";
import { BestTime } from "@/components/timer/best-time";
import { Scramble } from "@/components/timer/scramble";
import { TimerClock } from "@/components/timer/timer-clock";
import { Times } from "@/components/timer/times";
import { TotalSolves } from "@/components/timer/total-solves";


export default function Timer({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const times = Array.isArray(searchParams.times)
        ? searchParams.times
        : searchParams.times
            ? [searchParams.times]
            : []


    return (
        <MaxWidthWrapper className="flex flex-col gap-10 pt-10">

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                <BestTime times={times} />
                <AverageTimes times={times} />
                <TotalSolves times={times} />
            </section>

            <Scramble />
            <TimerClock />

            <section className="flex justify-center mt-5">
                <Times times={times} />
            </section>

        </MaxWidthWrapper>
    )
}
