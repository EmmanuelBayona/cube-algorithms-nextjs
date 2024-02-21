"use client"
import { useState } from "react"
import { CheckIcon, CircleBackslashIcon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { approveAlg, deleteAlg, rejectAlg } from "@/actions"
import { cn } from "@/lib/utils"
import { showToastError, showToastSuccess } from "@/lib/toaster"

export const AdminVerifyActions = ({ algID, isApproved }: { algID: number, isApproved: boolean }) => {

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleApprove = async () => {
        setStatus('loading')
        const { success } = await approveAlg(algID)
        if (!success) {
            setStatus('error')
            showToastError('Something went wrong')
            return
        }
        setStatus('success')
        showToastSuccess('Algorithm approved')
    }

    const handleReject = async () => {
        setStatus('loading')
        const { success } = await rejectAlg(algID)
        if (!success) {
            setStatus('error')
            showToastError('Something went wrong')
            return
        }
        setStatus('success')
        showToastSuccess('Algorithm rejected')
    }

    const handleDelete = async () => {
        setStatus('loading')
        const { success } = await deleteAlg(algID)
        if (!success) {
            setStatus('error')
            showToastError('Something went wrong')
            return
        }
        setStatus('success')
        showToastSuccess('Algorithm deleted')
    }

    return (
        <>
            {
                !isApproved && (
                    <Button variant='success' size='icon'
                        onClick={handleApprove}
                        disabled={status === 'loading'}
                        className={cn({ 'opacity-35': status === 'loading'})}
                    >
                        <CheckIcon />
                    </Button>
                )
            }

            <Button variant='warning' size='icon'
                onClick={handleReject}
                disabled={status === 'loading'}
                className={cn({ 'opacity-35': status === 'loading'})}
            >
                <CircleBackslashIcon />
            </Button>

            <Button variant='danger' size='icon'
                onClick={handleDelete}
                disabled={status === 'loading'}
                className={cn({ 'opacity-35': status === 'loading'})}
            >
                <TrashIcon />
            </Button>
        </>
    )

} 
