import { toast } from "sonner"


export const showToastError = (message: string) => {
    toast.error(message, {
        duration: 2000,
    })
    return;
}

export const showToastSuccess = (message: string) => {
    toast.success(message, {
        duration: 2000,
    })
    return;
}