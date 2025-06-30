import { create } from 'zustand'
import type { Restaurant, Product } from '../types'
import { fetchRestaurant, fetchMeals } from '../api/fetchRestaurantData'
import { toast } from "sonner"

type CartItem = {
  product: Product;
  quantity: number;
};

type RestaurantState = {
  restaurant: Restaurant | null
  products: Product[]
  isMealsLoading: boolean,
  isRestaurantLoading: boolean,
  restaurantError: string | null,
  currentMeal: Product | null,
  cart: CartItem[];
  fetchRestaurant: (id: number) => Promise<void>
  fetchMeals: (id: number) => Promise<void>
  setCurrentProduct: (product: Product | null) => void
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void,
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurant: null,
  restaurantError: null,
  products: [],
  cart: [],
  isMealsLoading: false,
  isRestaurantLoading: false,
  currentMeal: null,
  setCurrentProduct: (product: Product | null) => set({ currentMeal: product }),
  fetchRestaurant: async (id: number) => {
    set({ isRestaurantLoading: true });
    const restaurant = await fetchRestaurant(id);
    if (restaurant && restaurant?.status) {
      const errorMessage = restaurant.errors?.message || 'Unknown error';
      set({ restaurantError: errorMessage });
      toast.error(errorMessage);
    }

    console.log('fetched restaurant', restaurant)
    set({ restaurant, isRestaurantLoading: false })
  },
  fetchMeals: async (id: number) => {
    set({ isMealsLoading: true });
    const products = await fetchMeals(id);
    console.log('fetched products', products)
    set({ products, isMealsLoading: false })
  },

  addToCart: (product) => {
    toast.success(`${product.name} added to cart`)
    set((state) => {
      const existing = state.cart.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity: 1 }] };
    });
  },
  removeFromCart: (product) => {
    set((state) => {
      const existing = state.cart.find((item) => item.product.id === product.id);
      if (!existing) return {};
      if (existing.quantity === 1) {
        return { cart: state.cart.filter((item) => item.product.id !== product.id) };
      }
      return {
        cart: state.cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    });
  },

}))