"use client"
import { useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { cn } from "@/lib/utils";
import { deleteCaseAction } from "@/actions";
import { TooltipMessage } from "../../tooltip-message";
import { NewCaseForm } from "../../new-case-form";
import { DBCases, DBCubes, DBMethods } from "@/types";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { Button } from "@/components/ui/button";

interface AdminCasesActionsProps {
    caseId: number;
    caseName: string;
    cubeName: string;
    methodName: string;
    colorFaces: Record<number, keyof typeof CUBE_COLORS>;
    cubes: DBCubes[];
    methods: DBMethods[];
    cases: DBCases[];
}

export const AdminCasesActions = ({ caseId, caseName, cubes, methods, cases, cubeName, colorFaces, methodName }: AdminCasesActionsProps) => {

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleDelete = async () => {
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

    if (!cubes || !methods || !cases || !caseName || !colorFaces || !cubeName || !methodName) return null;


    return (
        <>
            <NewCaseForm
                cubes={cubes}
                methods={methods}
                cases={cases}
                editForm={true}
                initialCaseName={caseName}
                initialColorsFaces={colorFaces}
                initialCube={cubeName}
                initialMethod={methodName}
            />

            <TooltipMessage message="Delete case">
                <Button variant="danger" size='icon'
                    onClick={handleDelete}
                    className={cn({ 'opacity-50 cursor-not-allowed ': status === 'loading' })}
                    aria-disabled={status === 'loading'}
                >
                    <TrashIcon />
                </Button>
            </TooltipMessage>
        </>
    )

}
