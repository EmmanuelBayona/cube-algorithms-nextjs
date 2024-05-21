'use client';
import { useState } from "react";
import { CaseFormModal } from "@/components/case-form-modal";
import { Button } from "@/components/ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { DBCasesWithMethodAndCube } from "@/types";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

export const CaseTableBody = ({ cases }: { cases: DBCasesWithMethodAndCube[] }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <TableBody>
                {
                    cases.map(c => (
                        <TableRow key={c.id}>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>image</TableCell>
                            <TableCell className="flex justify-start gap-2">
                                <Button
                                    size="icon"
                                    variant="success"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <Pencil1Icon />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="danger"
                                >
                                    <TrashIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>


            <CaseFormModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen} />
        </>
    )

}
