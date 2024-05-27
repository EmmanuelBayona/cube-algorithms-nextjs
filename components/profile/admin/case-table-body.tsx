'use client';
import { useState } from "react";
import { CaseFormModal } from "@/components/case-form-modal";
import { Button } from "@/components/ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { DBCasesWithMethodAndCube, Status } from "@/types";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { deleteCaseAction } from "@/actions";
import { showToastError, showToastSuccess } from "@/lib/toaster";

interface CaseTableBodyProps {
    casesWithMethodAndCube: DBCasesWithMethodAndCube[];
}

export const CaseTableBody = ({ casesWithMethodAndCube }: CaseTableBodyProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState<number>();
    const [status, setStatus] = useState<Status>('idle');

    const handleDelete = async (caseId: number) => {
        if (status === 'loading') return;
        setStatus('loading');
        const { success } = await deleteCaseAction(caseId);
        showFeedback(success, 'Algorithm deleted');
    }

    const showFeedback = (success: boolean, successMsg: string) => {
        if (!success) {
            setStatus('error');
            showToastError('Something went wrong');
            return;
        }

        setStatus('success');
        showToastSuccess(successMsg);
    }


    return (
        <>
            <TableBody>
                {
                    casesWithMethodAndCube.map(c => (
                        <TableRow key={c.id}>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>image</TableCell>
                            <TableCell className="flex justify-start gap-2">
                                <Button
                                    size="icon"
                                    variant="success"
                                    onClick={() => {
                                        setSelectedCase(c.id);
                                        setIsModalOpen(true);
                                    }}
                                >
                                    <Pencil1Icon />
                                </Button>

                                <Button
                                    size="icon"
                                    variant="danger"
                                    onClick={() => handleDelete(c.id)}
                                >
                                    <TrashIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>


            <CaseFormModal
                caseIdToEdit={selectedCase}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </>
    )

}
