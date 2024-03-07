import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export const TooltipMessage = ({ children, message }: { children: React.ReactNode, message: string }) => {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {message}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )

}
