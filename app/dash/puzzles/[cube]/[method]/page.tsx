import type { Metadata } from "next";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import { CasesList } from "@/components/cases-list";

const validCubes = [
    '2x2',
    '3x3',
    // '4x4',
    // 'square-1',
]

export async function generateMetadata({ params }: { params: { cube: string, method: string } }): Promise<Metadata | undefined> {

    if (!validCubes.includes(params.method)) return;

    return {
        title: `${params.method} Algorithms`,
        description: `Discover the best algorithms for ${params.method}.`,
    }
}

export default async function PuzzlesPage({ params }: { params: { cube: string, method: string } }) {

    if (!validCubes.includes(params.cube)) return notFound();

    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl lg:text-4xl text-center md:text-start font-medium mt-10">{params.cube} Algorithms</h1>
            <CasesList
                className="mt-5 md:mt-10"
                method={params.method}
            />
        </MaxWidthWrapper>
    )

}
