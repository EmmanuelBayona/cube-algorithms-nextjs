import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { UserActionsList } from "@/components/user-actions-list";
import { auth, currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {

    const user = await currentUser();

    return (
        <MaxWidthWrapper>

            <h1 className="text-2xl lg:text-4xl font-medium mt-10">Hi, { user?.firstName }</h1>
            <UserActionsList />

        </MaxWidthWrapper>
    )

}