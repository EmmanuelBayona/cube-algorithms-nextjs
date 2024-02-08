import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { UserActionsList } from "@/components/user-actions-list";
import { UserAlgorithmsTable } from "@/components/user-algorithms-table";
import { currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {

    const user = await currentUser();

    return (
        <MaxWidthWrapper>

            <h1 className="text-2xl lg:text-4xl font-medium mt-10">Hi, {user?.firstName}</h1>
            <UserActionsList />
            <hr className="border-dark-accent border-opacity-50 mt-3 mb-7 md:mb-10" />
            <UserAlgorithmsTable />

        </MaxWidthWrapper>
    )

}
