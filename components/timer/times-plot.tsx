"use client";
import * as d3 from "d3";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { useTimerContext } from "@/context/timer-context";

export const TimesPlot = () => {

    const { reversedTimes } = useTimerContext()
    const svgRef = useRef<SVGSVGElement | null>(null)

    return (
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Times</CardTitle>
            </CardHeader>
            <CardContent>
                <svg ref={svgRef}></svg>
            </CardContent>
        </Card>
    )

}
