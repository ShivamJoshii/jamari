import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, ProductVariant } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Getters
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addToCart: (product, variant, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.variant.id === variant.id
        );

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.variant.id === variant.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { product, variant, quantity }],
          });
        }
      },

      removeFromCart: (variantId) => {
        const { items } = get();
        set({
          items: items.filter((item) => item.variant.id !== variantId),
        });
      },

      updateQuantity: (variantId, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          set({
            items: items.filter((item) => item.variant.id !== variantId),
          });
        } else {
          set({
            items: items.map((item) =>
              item.variant.id === variantId
                ? { ...item, quantity }
                : item
            ),
          });
        }
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'newfreshrebbulum-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
