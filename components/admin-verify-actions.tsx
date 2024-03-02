"use client"
import { useState } from "react"
import { CheckIcon, CircleBackslashIcon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { showToastError, showToastSuccess } from "@/lib/toaster"
import { approveAlgAction, deleteAlgAction, rejectAlgAction } from "@/actions"

export const AdminVerifyActions = ({ algID, isApproved }: { algID: number, isApproved: boolean }) => {

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleApprove = async () => {
        if (status === 'loading') return;
        setStatus('loading');
        const { success } = await approveAlgAction(algID);
        showFeedback(success, 'Algorithm approved');
    }

    const handleReject = async () => {
        if (status === 'loading') return;
        setStatus('loading');
        const { success } = await rejectAlgAction(algID);
        showFeedback(success, 'Algorithm rejected');
    }

    const handleDelete = async () => {
        if (status === 'loading') return;
        setStatus('loading');
        const { success } = await deleteAlgAction(algID);
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
            {
                !isApproved && (
                    <Button variant='success' size='icon'
                        onClick={handleApprove}
                        className={cn({ 'opacity-50 cursor-not-allowed ': status === 'loading' })}
                        aria-disabled={status === 'loading'}
                    >
                        <CheckIcon />
                    </Button>
                )
            }

            <Button variant='warning' size='icon'
                onClick={handleReject}
                className={cn({ 'opacity-50 cursor-not-allowed ': status === 'loading' })}
                aria-disabled={status === 'loading'}

            >
                <CircleBackslashIcon />
            </Button>

            <Button variant='danger' size='icon'
                onClick={handleDelete}
                className={cn({ 'opacity-50 cursor-not-allowed ': status === 'loading' })}
                aria-disabled={status === 'loading'}
            >
                <TrashIcon />
            </Button>
        </>
    )

} 
