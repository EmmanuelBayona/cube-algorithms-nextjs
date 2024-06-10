import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { AverageTimes } from "@/components/timer/average-times";
import { BestTime } from "@/components/timer/best-time";
import { Scramble } from "@/components/timer/scramble";
import { ScrambleDraw } from "@/components/timer/scramble-draw";
import { TimerClock } from "@/components/timer/timer-clock";
import { Times } from "@/components/timer/times";
import { TimesPlot } from "@/components/timer/times-plot";
import { TotalSolves } from "@/components/timer/total-solves";

export default function Timer() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-10 pt-10">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                <BestTime />
                <AverageTimes />
                <TotalSolves />
            </section>

            <Scramble />
            <TimerClock />

            <section className="mt-5 flex flex-col lg:flex-row lg:items-center gap-5 w-full">
                <Times />
                <ScrambleDraw />
                {/* <TimesPlot /> */}
            </section>
        </MaxWidthWrapper>
    );
}
