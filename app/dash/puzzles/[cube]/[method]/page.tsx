import type { Metadata } from "next";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import { CasesList } from "@/components/cases-list";
import { Suspense } from "react";
import { SkeletonGrid } from "@/components/skeleton-grid";
import prisma from "@/lib/prisma";


export async function generateMetadata({ params }: { params: { cube: string, method: string } }): Promise<Metadata | undefined> {

    const methods = await prisma.method.findMany();
    const method = methods.find(method => method.name === params.method);

    if (!method) return notFound();

    return {
        title: `${method.name} Algorithms`,
        description: `Discover the best algorithms for ${method.name}.`,
    }
}

export default async function PuzzlesPage({ params }: { params: { cube: string, method: string } }) {


    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl lg:text-4xl text-center md:text-start font-medium mt-10">{params.cube} Algorithms</h1>
            <Suspense key={params.method} fallback={<SkeletonGrid className="mt-5 md:mt-10" />} >
                <CasesList
                    className="mt-5 md:mt-10"
                    method={params.method}
                />
            </Suspense>
        </MaxWidthWrapper>
    )

}
