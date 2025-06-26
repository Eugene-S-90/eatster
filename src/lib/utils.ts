import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Meal } from "../types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function queryParamsParser(key: string) {
  const searchParams = new URLSearchParams(window.location.search)
  const value = searchParams.get(key)
  return value ?? null
}

export function groupMealsByCategory(meals: Meal[]) {
  const map = new Map<string, { name: string; order: number; meals: typeof meals }>()
  for (const meal of meals) {
    const category = meal.meal_category
    const key = `category-${category.id}`
    if (!map.has(key)) {
      map.set(key, { name: category.name, order: category.order, meals: [] })
    }
    map.get(key)!.meals.push(meal)
  }

  return Array.from(map.entries())
    .sort((a, b) => a[1].order - b[1].order)
    .map(([id, value]) => ({
      id,
      name: value.name,
      meals: value.meals,
    }))
}
