import { create } from "zustand";
import { calculateTotalPrice } from "./utils/calculateTotalPrice";
import { calculatePlanPrice } from "./utils/calculatePlanPrice";
import type { CartStore } from "./cartStore.types";

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  plan: null,
  totals: { totalPrice: 0, totalPriceWithoutDiscounts: 0, totalSavings: 0 },
  monthlyTotal: 0,
  monthlySavings: 0,

  increaseProduct: (product, variantId) =>
    set((state) => {
      const existingIndex = state.products.findIndex(
        (p) => p.product.id === product.id && p.variantId === variantId,
      );

      const newProducts = [...state.products];

      if (existingIndex >= 0) {
        newProducts[existingIndex].quantity += 1;
      } else {
        newProducts.push({ product, variantId, quantity: 1 });
      }

      return {
        products: newProducts,
        totals: calculateTotalPrice(newProducts),
      };
    }),

  decreaseProduct: (product, variantId) =>
    set((state) => {
      const existingIndex = state.products.findIndex(
        (p) => p.product.id === product.id && p.variantId === variantId,
      );

      if (existingIndex < 0) return state;

      const newProducts = [...state.products];
      const currentQuantity = newProducts[existingIndex].quantity;

      if (currentQuantity > 1) {
        newProducts[existingIndex].quantity -= 1;
      } else {
        newProducts.splice(existingIndex, 1);
      }

      return {
        products: newProducts,
        totals: calculateTotalPrice(newProducts),
      };
    }),

  setPlan: (plan, variantId) =>
    set(() => {
      const { monthlyTotal, monthlySavings } = calculatePlanPrice(
        plan,
        variantId,
      );

      return {
        plan: { plan, variantId },
        monthlyTotal,
        monthlySavings,
      };
    }),

  clearPlan: () =>
    set(() => ({
      plan: null,
      monthlyTotal: 0,
      monthlySavings: 0,
    })),
}));
