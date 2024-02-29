import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Link from "next/link";
import { CubeFullView } from "./ui/cube-full-view";
import { SOLVE_CUBE_COLORS } from "@/lib/cubes-constants";
import { getCubes } from "@/queries/cube";

export const CubesGrid = async ({ className }: { className?: string }) => {

    const cubes = await getCubes();

    return (
        <section
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                className
            )}
        >
            {cubes.map((cube) => (
                <Link key={cube.id} href={`/dash/puzzles/${cube.name}`}>
                    <Card key={cube.id}>
                        <CardHeader>
                            <CardTitle>{cube.name}</CardTitle>
                            <CardDescription>
                                {cube.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <CubeFullView
                                background="transparent"
                                size={200}
                                colors={SOLVE_CUBE_COLORS}
                            />
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </section>
    );
};
