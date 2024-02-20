"use client"
import { CheckIcon, CircleBackslashIcon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { approveAlg } from "@/actions"

export const AdminVerifyActions = ({ algID }: { algID: number }) => {

    const handleApprove = () => {
        approveAlg(algID)
    }

    return (
        <>
            <Button variant='success' size='icon'
                onClick={handleApprove}
            >
                <CheckIcon />
            </Button>

            <Button variant='warning' size='icon'>
                <CircleBackslashIcon />
            </Button>

            <Button variant='danger' size='icon'>
                <TrashIcon />
            </Button>
        </>
    )

} 
