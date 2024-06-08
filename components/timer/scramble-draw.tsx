"use client";
import { drawScramble } from "@/lib/draw-scramble";
import { Card } from "../ui/card";
import { useMemo } from "react";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { useTimerContext } from "@/context/timer-context";

export const ScrambleDraw = () => {
    const { scramble } = useTimerContext();
    // const scrambleFaces = useMemo(() => drawScramble(scramble), [scramble]);
    const scrambleFaces = useMemo(() => drawScramble("F R2 U' L' F"), []);

    const getColor = (color: string) => {
        if (color.includes("G")) return CUBE_COLORS.green;
        if (color.includes("R")) return CUBE_COLORS.red;
        if (color.includes("B")) return CUBE_COLORS.blue;
        if (color.includes("O")) return CUBE_COLORS.orange;
        if (color.includes("Y")) return CUBE_COLORS.yellow;
        if (color.includes("W")) return CUBE_COLORS.white;
    };

    return (
        <Card className="lg:col-span-2 p-5 text-black text-sm">
            <div className="grid grid-cols-4 gap-1 w-fit">
                <div className="bg-black col-start-2 grid grid-cols-3 gap-1 w-fit p-1">
                    {scrambleFaces?.whiteFace?.map((color, i) => (
                        <div
                            key={i}
                            className="h-5 w-5"
                            style={{
                                backgroundColor: getColor(color),
                            }}
                        >
                            {color}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-1 grid grid-cols-4 gap-1 w-fit">
                <div className="bg-black grid grid-cols-3 gap-1 w-fit p-1">
                    {scrambleFaces?.orangeFace?.map((color, i) => (
                        <div
                            key={i}
                            className="h-5 w-5"
                            style={{
                                backgroundColor: getColor(color),
                            }}
                        >
                            {color}
                        </div>
                    ))}
                </div>

                <div className="bg-black grid grid-cols-3 gap-1 w-fit p-1">
                    {scrambleFaces?.greenFace?.map((color, i) => (
                        <div
                            key={i}
                            className="h-5 w-5"
                            style={{
                                backgroundColor: getColor(color),
                            }}
                        >
                            {color}
                        </div>
                    ))}
                </div>

                <div className="bg-black grid grid-cols-3 gap-1 w-fit p-1">
                    {scrambleFaces?.redFace?.map((color, i) => (
                        <div
                            key={i}
                            className="h-5 w-5"
                            style={{
                                backgroundColor: getColor(color),
                            }}
                        >
                            {color}
                        </div>
                    ))}
                </div>

                <div className="bg-black grid grid-cols-3 gap-1 w-fit p-1">
                    {scrambleFaces?.blueFace?.map((color, i) => (
                        <div
                            key={i}
                            className="h-5 w-5"
                            style={{
                                backgroundColor: getColor(color),
                            }}
                        >
                            {color}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-1 grid grid-cols-4 gap-1 w-fit">
                <div className="bg-black col-start-2 grid grid-cols-3 gap-1 w-fit p-1">
                    {scrambleFaces?.yellowFace?.map((color, i) => (
                        <div
                            key={i}
                            className="h-5 w-5"
                            style={{
                                backgroundColor: getColor(color),
                            }}
                        >
                            {color}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
