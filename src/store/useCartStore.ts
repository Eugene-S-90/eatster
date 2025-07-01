import { create } from 'zustand'
import type { Product } from '../types'
import { toast } from "sonner"

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
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
}));