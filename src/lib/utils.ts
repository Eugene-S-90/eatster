import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function queryParamsParser(key: string) {
  const searchParams = new URLSearchParams(window.location.search)
  const value = searchParams.get(key)
  return value ?? null
}
