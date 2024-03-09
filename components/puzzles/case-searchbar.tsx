"use client";
import { useOptimistic, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input"


export const CaseSearchBar = ({ searchedCase }: { searchedCase: string }) => {

    const router = useRouter();
    const [optimisticSearch, setOptimisticSearch] = useOptimistic(searchedCase)
    const [isPending, startTransition] = useTransition();

    const updateSearch = (value: string) => {
        const newParam = new URLSearchParams({ searchedCase: value });

        startTransition(() => {
            setOptimisticSearch(value);
            router.push(`?${newParam}`)
        });
    }

    return (
        <Input
            value={optimisticSearch}
            className="mt-5 md:mt-0"
            onChange={(e) => updateSearch(e.target.value)}
            placeholder="Search for a case or algorithm"
            data-pending={isPending ? "" : undefined}
        />
    )

}
