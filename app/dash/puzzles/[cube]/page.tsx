import type { Metadata } from "next";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import { MethodsGrid } from "@/components/puzzles/methods-grid";
import { Cubes } from "@/types";
import { Suspense } from "react";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { getCubes } from "@/queries/cube";

export async function generateMetadata({ params }: { params: { cube: string } }): Promise<Metadata | undefined> {

    const cubes = await getCubes();
    const cube = cubes.find(cube => cube.name === params.cube);

    if (!cube) return notFound();

    return {
        title: `${cube.name} Methods`,
        description: `Discover the best ${cube.name} methods for speedsolving.`,
    }
}

export default async function PuzzlesPage({ params }: { params: { cube: string } }) {

    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl lg:text-4xl text-center md:text-start font-medium mt-10">{params.cube} Methods</h1>
            <Suspense key={params.cube} fallback={<SkeletonGrid className="mt-5 md:mt-10" />}>
                <MethodsGrid
                    cube={params.cube as Cubes}
                    className="mt-5 md:mt-10"
                />
            </Suspense>
        </MaxWidthWrapper>
    )

}
