import { Protect } from "@clerk/nextjs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { AdminVerifyAlgorithmsTable } from "./admin-verify-algorithms-table"
import { AdminMethodsTable } from "./admin-methods-table"
import { AdminCasesTable } from "./admin-cases-table"


export const AdminTabsViews = () => {

    return (
        <Tabs defaultValue="algorithms" className="mt-10">
            <TabsList>
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
