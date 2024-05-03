import { Protect } from "@clerk/nextjs"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"
import { AdminVerifyAlgorithmsTable } from "./admin/admin-verify-algorithms-table"
import { AdminMethodsTable } from "./admin/admin-methods-table"
import { AdminCasesTable } from "./admin/admin-cases-table"
import { UserAlgorithmsTable } from "./user-algorithms-table"

export const TabsTableViews = () => {

    return (
        <Tabs defaultValue="algorithms" className="mt-0" >
            <div className="w-full overflow-x-auto">
                <TabsList>

                    <TabsTrigger value="your-algorithms">Your algorithms</TabsTrigger>

                    <Protect permission="org:algorithms:verify">
                        <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
                    </Protect>

                    <Protect permission="org:methods:manage">
                        <TabsTrigger value="methods">Methods</TabsTrigger>
                    </Protect>

                    <Protect permission="org:cases:manage">
                        <TabsTrigger value="cases">Cases</TabsTrigger>
                    </Protect>
                </TabsList>
            </div>

            <TabsContent value="your-algorithms">
                <UserAlgorithmsTable />
            </TabsContent>

            <TabsContent value="algorithms">
                <Protect permission="org:algorithms:verify">
                    <AdminVerifyAlgorithmsTable />
                </Protect>
            </TabsContent>

            <TabsContent value="methods">
                <Protect permission="org:methods:manage">
                    <AdminMethodsTable />
                </Protect>
            </TabsContent>

            <TabsContent value="cases">
                <Protect permission="org:cases:manage">
                    <AdminCasesTable />
                </Protect>
            </TabsContent>
        </Tabs>
    )

}
