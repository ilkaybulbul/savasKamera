import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/** Path to a file in /public that also works when the site is served from a sub-path (GitHub Pages). */
export function asset(file: string) {
    return import.meta.env.BASE_URL + file.replace(/^\//, '')
}
