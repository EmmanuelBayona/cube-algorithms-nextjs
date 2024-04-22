import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { AdminTabsViews } from "@/components/profile/admin/admin-tabs-views";
import { UserActionsList } from "@/components/profile/user-actions-list";
import { UserAlgorithmsTable } from "@/components/profile/user-algorithms-table";
import { auth, currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {

    const user = await currentUser();
    const { orgSlug } = auth();

    return (
        <MaxWidthWrapper className="py-5">

            <h1 className="text-2xl lg:text-4xl font-medium mt-5">Hi, {user?.firstName}</h1>
            <UserActionsList />
            <hr className="border-white/5 border-opacity-50 mt-3 mb-7 md:mb-10" />
            <UserAlgorithmsTable />

            {
                // admin view just for user that are in the admin organization
                orgSlug === "admin" && <AdminTabsViews />
            }

        </MaxWidthWrapper>
    )

}
