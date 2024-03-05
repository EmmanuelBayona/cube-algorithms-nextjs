import { cn } from "@/lib/utils";
import { Cubes } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Link from "next/link";
import { CubeFullView } from "./ui/cube-full-view";
import {
    F2L1_CUBE_COLORS,
    OLL1_CUBE_COLORS,
    PLLAa_CUBE_COLORS,
} from "@/lib/cubes-constants";
import { CubeTopView } from "./ui/cube-top-view";
import { getMethodsByCubeName } from "@/queries/method";

const CUBE_COVERS = {
    F2L: F2L1_CUBE_COLORS,
    OLL: OLL1_CUBE_COLORS,
    PLL: PLLAa_CUBE_COLORS,
};

export const MethodsGrid = async ({
    cube,
    className,
}: {
    cube: Cubes;
    className?: string;
}) => {

    const methods = await getMethodsByCubeName(cube);

    return (
        <section
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                className
            )}
        >
            {methods.map((method) => (
                <Link
                    key={method.id}
                    href={`/dash/puzzles/${cube}/${method.name}`}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>{method.name}</CardTitle>
                            <CardDescription>
                                {method.description}
                            </CardDescription>
                            <CardContent className="flex justify-center">
                                {method.svgView === "top-view" ? (
                                    <CubeTopView
                                        background="transparent"
                                        size={200}
                                        colors={
                                            CUBE_COVERS[
                                            method.name as keyof typeof CUBE_COVERS
                                            ]
                                        }
                                    />
                                ) : (
                                    <CubeFullView
                                        background="transparent"
                                        size={200}
                                        colors={
                                            CUBE_COVERS[
                                            method.name as keyof typeof CUBE_COVERS
                                            ]
                                        }
                                    />
                                )}
                            </CardContent>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </section>
    );
};
