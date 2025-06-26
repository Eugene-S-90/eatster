import { create } from 'zustand'
import type { Restaurant, Meal } from '../types'
import { fetchRestaurant, fetchMeals } from '../api/fetchMeals'
import { toast } from "sonner"

type CartItem = {
  meal: Meal;
  quantity: number;
};

type RestaurantState = {
  restaurant: Restaurant | null
  meals: Meal[]
  isMealsLoading: boolean,
  isRestaurantLoading: boolean,
  restaurantError: string | null,
  currentMeal: Meal | null,
  cart: CartItem[];
  fetchData: (id: number) => Promise<void>
  fetchRestaurant: (id: number) => Promise<void>
  fetchMeals: (id: number) => Promise<void>
  setCurrentMeal: (meal: Meal | null) => void
  addToCart: (meal: Meal) => void
  removeFromCart: (meal: Meal) => void,
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurant: null,
  restaurantError: null,
  meals: [],
  cart: [],
  isMealsLoading: false,
  isRestaurantLoading: false,
  currentMeal: null,
  setCurrentMeal: (meal: Meal | null) => set({ currentMeal: meal }),
  fetchRestaurant: async (id: number) => {
    set({ isRestaurantLoading: true });
    const restaurant = await fetchRestaurant(id);
    if (restaurant && restaurant?.status) {
      set({ restaurantError: restaurant.errors.message });
      toast.error(restaurant.errors.message);
    }

    console.log('fetched restaurant', restaurant)
    set({ restaurant, isRestaurantLoading: false })
  },
  fetchMeals: async (id: number) => {
    set({ isMealsLoading: true });
    const meals = await fetchMeals(id);
    console.log('fetched meals', meals)
    set({ meals, isMealsLoading: false })
  },

  fetchData: async (id: number) => {
    set({ isMealsLoading: true })
    const [meals] = await Promise.all([
      // fetchRestaurant(id),
      fetchMeals(id),
    ])
    set({ meals, isMealsLoading: false })
  },
  addToCart: (meal) => {
    toast.success(`${meal.name} added to cart`)
    set((state) => {
      const existing = state.cart.find((item) => item.meal.id === meal.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.meal.id === meal.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { meal, quantity: 1 }] };
    });
  },
  removeFromCart: (meal) => {
    set((state) => {
      const existing = state.cart.find((item) => item.meal.id === meal.id);
      if (!existing) return {};
      if (existing.quantity === 1) {
        return { cart: state.cart.filter((item) => item.meal.id !== meal.id) };
      }
      return {
        cart: state.cart.map((item) =>
          item.meal.id === meal.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    });
  },

}))