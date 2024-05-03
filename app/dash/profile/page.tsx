import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TabsTableViews } from "@/components/profile/tabs-table-views";
import { UserActionsList } from "@/components/profile/user-actions-list";
import { currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {

    const user = await currentUser();

    return (
        <MaxWidthWrapper className="py-5">

            <h1 className="text-2xl lg:text-4xl font-medium mt-5">Hi, {user?.firstName}</h1>
            <UserActionsList />
            <hr className="border-white/5 border-opacity-50 my-3" />
            <TabsTableViews />

        </MaxWidthWrapper>
    )

}
