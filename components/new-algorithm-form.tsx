import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export const NewAlgorithmForm = ({ className }: { className?: string }) => {

    return (
        <form className={cn('grid grid-cols-2 gap-5 max-w-2xl', className)}>
            
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder='Select a cube' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='2x2'> 2x2 </SelectItem>
                    <SelectItem value='3x3'> 3x3 </SelectItem>
                    <SelectItem value='4x4'> 4x4 </SelectItem>
                    <SelectItem value='Square-1'> Square-1 </SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger>
                    <SelectValue placeholder='Select a method' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='F2L'> F2L </SelectItem>
                    <SelectItem value='OLL'> OLL </SelectItem>
                    <SelectItem value='PLL'> PLL </SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="col-span-2">
                    <SelectValue placeholder='Select a case' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='F2L-1'> F2L-1 </SelectItem>
                    <SelectItem value='F2L-2'> F2L-2 </SelectItem>
                    <SelectItem value='F2L-3'> F2L-3 </SelectItem>
                    <SelectItem value='F2L-4'> F2L-4 </SelectItem>
                </SelectContent>
            </Select>

        </form>
    )

}