import type { Restaurant, Meal } from '../types/index'

const BASE = import.meta.env.VITE_API_BASE as string;

export const fetchRestaurantsList = async (): Promise<Restaurant> => {
  const res = await fetch(`${BASE}/restaurants/`)
  return res.json()
}

export const fetchRestaurant = async (id: number): Promise<Restaurant> => {
  const res = await fetch(`${BASE}/restaurants/${id}`)
  return res.json()
}

export const fetchMeals = async (id: number): Promise<Meal[]> => {
  const url = `${BASE}/meals?restaurant_ids[]=${id}&page=1&per_page=50&meals_for=web&language=en`
  const res = await fetch(url)
  const data = await res.json();
  return data.data
}