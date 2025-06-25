import { create } from 'zustand'
import type { Restaurant, Meal } from '../types'
import { fetchRestaurant, fetchMeals } from '../api/fetchMeals'

type RestaurantState = {
  restaurant: Restaurant | null
  meals: Meal[]
  isMealsLoading: boolean,
  isRestaurantLoading: boolean,
  fetchData: (id: number) => Promise<void>
  fetchRestaurant: (id: number) => Promise<void>
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurant: null,
  meals: [],
  isMealsLoading: false,
  isRestaurantLoading: false,
  fetchRestaurant: async (id: number) => {
    set({ isRestaurantLoading: true });
    const restaurant = await fetchRestaurant(id)
    set({ restaurant, isRestaurantLoading: false })
  },

  fetchData: async (id: number) => {
    set({ isMealsLoading: true })
    const [meals] = await Promise.all([
      // fetchRestaurant(id),
      fetchMeals(id),
    ])
    set({ meals, isMealsLoading: false })
  },
}))