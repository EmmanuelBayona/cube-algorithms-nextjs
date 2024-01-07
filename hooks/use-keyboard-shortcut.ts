import { useEffect } from "react";

type Key = 'Space';

export const useKeyboardShortcut = (key: Key, callback: () => void) => {

    useEffect(() => {
        const handleKeyDown = ( event: KeyboardEvent ) => {
            if (event.code !== key) return;
            callback();
        }
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [key, callback]);

}