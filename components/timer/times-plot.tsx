"use client";
import { Card } from "../ui/card";
import { useTimerContext } from "@/context/timer-context";
import { formatTime } from "@/lib/utils";
import { AreaChart } from '@tremor/react';

export const TimesPlot = () => {
    const { times } = useTimerContext();

    const timesWithNumeration = times.map((time, index) => ({
        ...time,
        num: index + 1,
    }));

    const statusColor = {
        times: 'bg-blue-500',
    };


    return (
        <Card className="w-full lg:w-72 h-[320px] flex items-center px-4">
            <AreaChart
                data={timesWithNumeration}
                index="num"
                categories={['time']}
                colors={['blue']}
                valueFormatter={formatTime}
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                className="h-[288px]"
            />
        </Card>
    );
};
