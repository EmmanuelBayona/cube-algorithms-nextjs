import { LoopIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { TooltipMessage } from "../tooltip-message"
import { useTimerContext } from "@/context/timer-context";
import { generateScramble } from "@/helpers/scramble";

export const TimerActions = () => {

    const { setScramble } = useTimerContext();

    return (
        <TooltipMessage
            message="Generate new scramble"
        >
            <Button
                size={"icon"}
                onClick={() => setScramble(generateScramble().join(" "))}
            >
                <LoopIcon />
            </Button>
        </TooltipMessage>
    )

}
