import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { NewAlgorithmForm } from "@/components/new-algorithm-form";

export default function NewAlgorithmPage() {

    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl lg:text-4xl text-center md:text-start font-medium mt-10">New algorithm</h1>
            <NewAlgorithmForm className="mt-5"/>
        </MaxWidthWrapper>
    )

}