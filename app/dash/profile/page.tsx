import { AdminCasesTable } from "@/components/admin-cases-table";
import { AdminMethodsTable } from "@/components/admin-methods-table";
import { AdminVerifyAlgorithmsTable } from "@/components/admin-verify-algorithms-table";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { UserActionsList } from "@/components/user-actions-list";
import { UserAlgorithmsTable } from "@/components/user-algorithms-table";
import { Protect, currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {

    const user = await currentUser();

    return (
        <MaxWidthWrapper className="py-5">

            <h1 className="text-2xl lg:text-4xl font-medium mt-5">Hi, {user?.firstName}</h1>
            <UserActionsList />
            <hr className="border-white/5 border-opacity-50 mt-3 mb-7 md:mb-10" />
            <UserAlgorithmsTable />

            <Protect permission="org:algorithms:verify">
                <AdminVerifyAlgorithmsTable />
            </Protect>

            <div className="lg:flex lg:gap-4 mt-20">
                <Protect permission="org:methods:manage">
                    <AdminMethodsTable />
                </Protect>

                <Protect permission="org:cases:manage">
                    <AdminCasesTable />
                </Protect>
            </div>

        </MaxWidthWrapper>
    )

}
