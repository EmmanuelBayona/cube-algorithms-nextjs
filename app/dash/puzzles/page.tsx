import { CubesGrid } from "@/components/cubes-grid";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { Title } from "@/components/ui/title";
import { Suspense } from "react";

export default function PuzzlesPage() {

    return (
        <MaxWidthWrapper>
            <Title className="mt-10">Cubes</Title>
            <Suspense fallback={<SkeletonGrid className="mt-5 md:mt-10" />}>
                <CubesGrid className="mt-5 md:mt-10" />
            </Suspense>
        </MaxWidthWrapper>
    )

}
