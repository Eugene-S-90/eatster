import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Product } from "../types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function queryParamsParser(key: string) {
  const searchParams = new URLSearchParams(window.location.search)
  const value = searchParams.get(key)
  return value ?? null
}

export function groupProductsByCategory(products: Product[]) {
  const map = new Map<string, { name: string; order: number; products: typeof products }>()
  for (const product of products) {
    const category = product.meal_category
    const key = `category-${category.id}`
    if (!map.has(key)) {
      map.set(key, { name: category.name, order: category.order, products: [] })
    }
    map.get(key)!.products.push(product)
  }

  return Array.from(map.entries())
    .sort((a, b) => a[1].order - b[1].order)
    .map(([id, value]) => ({
      id,
      name: value.name,
      products: value.products,
    }))
}
