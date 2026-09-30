import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/** Path to a file in /public that also works when the site is served from a sub-path (GitHub Pages). */
export function asset(file: string) {
    return import.meta.env.BASE_URL + file.replace(/^\//, '')
}

/** Event ContactForm listens for to preselect the "service" field. */
export const SELECT_SERVICE_EVENT = 'sk:select-service'

/** Scrolls to the contact form and preselects a service there (e.g. 'intercom'). */
export function requestService(service: string) {
    window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: service }))
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
}
