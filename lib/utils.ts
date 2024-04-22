import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatTime(milliseconds: number) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    const formattedHours = hours > 0 ? padZero(hours) + ':' : '';
    const formattedMinutes = minutes > 0 || hours > 0 ? padZero(minutes) + ':' : '';

    return `${formattedHours}${formattedMinutes}${padZero(seconds)}.${padZero(centiseconds)}`;
}

function padZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
}
