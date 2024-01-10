import type { Metadata } from "next";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";

const validCubes = [
    '2x2',
    '3x3',
    '4x4',
    'square-1',
]

export async function generateMetadata({ params }: { params: { cube: string } }): Promise<Metadata | undefined>{

    if (!validCubes.includes(params.cube)) return;

    return {
        title: `${params.cube} Methods`,
        description: `Discover the best ${params.cube} methods for speedsolving.`,
    }
}

export default function PuzzlesPage({ params }: { params: { cube: string } }) {

    if (!validCubes.includes(params.cube)) return notFound();

    return (
        <MaxWidthWrapper>
            <h1 className="mt-10 text-4xl font-medium">
                {params.cube} Methods
            </h1>
        </MaxWidthWrapper>
    )

}