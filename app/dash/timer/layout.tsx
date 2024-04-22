import { TimerProvider } from "@/context/timer-context";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {

    return (
        <TimerProvider>
            {children}
        </TimerProvider>
    )

}
