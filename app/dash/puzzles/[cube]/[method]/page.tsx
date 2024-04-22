import type { Metadata } from "next";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import { CasesList } from "@/components/puzzles/cases-list";
import { Suspense } from "react";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { getMethods } from "@/queries/method";
import { CaseSearchBar } from "@/components/puzzles/case-searchbar";

export async function generateMetadata({
    params,
}: {
    params: { cube: string; method: string };
}): Promise<Metadata | undefined> {

    const methods = await getMethods();
    const method = methods.find((method) => method.name === params.method);

    if (!method) return notFound();

    return {
        title: `${method.name} Algorithms`,
        description: `Discover the best algorithms for ${method.name}.`,
    };
}

export default async function PuzzlesPage({
    params,
    searchParams,
}: {
    params: { cube: string; method: string };
    searchParams: { [key: string]: string | undefined };
}) {


    return (
        <MaxWidthWrapper>

            <div className="md:flex md:items-center md:gap-4 mt-10">
                <h1 className="text-2xl md:text-4xl text-center md:text-start font-medium shrink-0">
                    {params.method} Algorithms
                </h1>
                <CaseSearchBar
                    searchedCase={searchParams.searchedCase || ""}
                />
            </div>

            <Suspense
                key={params.method}
                fallback={<SkeletonGrid className="mt-5 md:mt-10" />}
            >
                <CasesList className="mt-5 md:mt-10" method={params.method} valueToFiler={searchParams.searchedCase} />
            </Suspense>
        </MaxWidthWrapper>
    );
}
