import type { Plan } from "../types/plan.types";
import type { Product } from "../types/product.types";

export interface CartProduct {
  product: Product;
  variantId: string;
  quantity: number;
}

export interface CartTotals {
  totalPrice: number;
  totalPriceWithoutDiscounts: number;
  totalSavings: number;
}
export interface PlanTotals {
  monthlyTotal: number;
  monthlySavings: number;
}
export interface CartStore {
  products: CartProduct[];
  plan: { plan: Plan; variantId: string } | null;
  totals: CartTotals;
  monthlyTotal: number;
  monthlySavings: number;

  increaseProduct: (product: Product, variantId: string) => void;
  decreaseProduct: (product: Product, variantId: string) => void;
  setPlan: (plan: Plan, variantId: string) => void;
  clearPlan: () => void;
}
