"use client"
import { useState } from "react";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { cn } from "@/lib/utils";
import { deleteCaseAction } from "@/actions";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export const AdminCasesActions = ({ caseId }: { caseId: number }) => {

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


    return (
        <>
            <Button variant="success" size='icon'
            // onClick={handleApprove}
            // className={cn({ 'opacity-50 cursor-not-allowed ': status === 'loading' })}
            // aria-disabled={status === 'loading'}
            >
                <Pencil1Icon />
            </Button>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="danger" size='icon'
                            onClick={handleDelete}
                            className={cn({ 'opacity-50 cursor-not-allowed ': status === 'loading' })}
                            aria-disabled={status === 'loading'}
                        >
                            <TrashIcon />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Delete case
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </>
    )

}
