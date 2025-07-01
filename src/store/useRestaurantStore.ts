import { create } from 'zustand'
import type { Restaurant, Product } from '../types'
import { fetchRestaurant, fetchMeals } from '../api/fetchRestaurantData'
import { toast } from "sonner"

type ProductState = {
  restaurant: Restaurant | null
  products: Product[]
  isProductsLoading: boolean
  isRestaurantLoading: boolean
  restaurantError: string | null
  currentProduct: Product | null
  fetchRestaurant: (id: number) => Promise<void>
  fetchMeals: (id: number) => Promise<void>
  setCurrentProduct: (product: Product | null) => void
}

export const useRestaurantStore = create<ProductState>((set) => ({
  restaurant: null,
  restaurantError: null,
  products: [],
  isProductsLoading: false,
  isRestaurantLoading: false,
  currentProduct: null,
  setCurrentProduct: (product: Product | null) => set({ currentProduct: product }),
  fetchRestaurant: async (id: number) => {
    set({ isRestaurantLoading: true });
    const restaurant = await fetchRestaurant(id);
    if (restaurant && restaurant?.status) {
      const errorMessage = restaurant.errors?.message || 'Unknown error';
      set({ restaurantError: errorMessage });
      toast.error(errorMessage);
    }
    set({ restaurant, isRestaurantLoading: false })
  },
  fetchMeals: async (id: number) => {
    set({ isProductsLoading: true });
    const products = await fetchMeals(id);
    set({ products, isProductsLoading: false })
  },
}));