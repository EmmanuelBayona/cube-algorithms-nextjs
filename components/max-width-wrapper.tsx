import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {

    return <div className={cn('mx-auto w-full max-w-screen-xl px-6 md:px-20', className)}>
        { children }
    </div>

}