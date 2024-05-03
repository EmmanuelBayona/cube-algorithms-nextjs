import {
    Table,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
    TableFooter,
    TableBody,
} from "../../ui/table";
import prisma from "@/lib/prisma";
import { CubeFullView } from "../../ui/cube-full-view";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { CubeTopView } from "../../ui/cube-top-view";
import { AdminVerifyActions } from "./admin-verify-actions";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const AdminVerifyAlgorithmsTable = async () => {
    const uploadedAlgorithms = await prisma.algorithm.findMany({
        include: {
            case: {
                include: {
                    method: {
                        include: {
                            cube: true,
                        },
                    },
                },
            },
        },
    });

    if (uploadedAlgorithms.length === 0) return null;

    const dateTimeFormatUS = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <ScrollArea className="h-[40rem]">
            <Table>
                <TableCaption>Algorithms to verify</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Cube</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Case</TableHead>
                        <TableHead>Alg. Image</TableHead>
                        <TableHead>Algorithm</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {uploadedAlgorithms.map((algorithm) => (
                        <TableRow key={algorithm.id}>
                            <TableCell>{algorithm.case.method.cube.name}</TableCell>
                            <TableCell>{algorithm.case.method.name}</TableCell>
                            <TableCell>{algorithm.case.name}</TableCell>
                            <TableCell>
                                {algorithm.case.method.svgView === "top-view" ? (
                                    <CubeTopView
                                        size={80}
                                        background="transparent"
                                        colors={
                                            algorithm.case.colors as Record<
                                                number,
                                                keyof typeof CUBE_COLORS
                                            >
                                        }
                                    />
                                ) : (
                                    <CubeFullView
                                        size={80}
                                        background="transparent"
                                        colors={
                                            algorithm.case.colors as Record<
                                                number,
                                                keyof typeof CUBE_COLORS
                                            >
                                        }
                                    />
                                )}
                            </TableCell>
                            <TableCell>{algorithm.algorithm}</TableCell>
                            <TableCell>
                                {dateTimeFormatUS.format(algorithm.createdAt)}
                            </TableCell>
                            <TableCell className="flex justify-start gap-2">
                                <AdminVerifyActions
                                    algID={algorithm.id}
                                    isApproved={algorithm.isApproved}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7}>
                            Total algorithms: {uploadedAlgorithms.length}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <ScrollBar orientation="vertical" />
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};
