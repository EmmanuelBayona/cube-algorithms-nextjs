import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Scramble } from "@/components/scramble";
import { TimerClock } from "@/components/timer-clock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CARDS_DATA = [
    { title: 'Best time', value: '18.32' },
    { title: 'Average time', value: '24.32' },
    { title: 'Total solves', value: '120' },
]

export default function Timer() {
    return (
        <></>
        // <MaxWidthWrapper className="flex flex-col gap-10 pt-10">

        //     <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        //         {
        //             CARDS_DATA.map((item, index) => (
        //                 <Card key={index}>
        //                     <CardHeader>
        //                         <CardTitle>{item.title}</CardTitle>
        //                     </CardHeader>

        //                     <CardContent>
        //                         <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">{item.value}</span>
        //                     </CardContent>
        //                 </Card>
        //             ))
        //         }
        //     </section>

        //     <Scramble />

        //     <TimerClock />

        // </MaxWidthWrapper>
    )
}
