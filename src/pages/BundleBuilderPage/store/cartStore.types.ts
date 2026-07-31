import type { Plan } from "../types/plan.types";
import type { Product } from "../types/product.types";

export interface CartProduct {
  product: Product;
  variantId: string;
  quantity: number;
}
export type CartPlan = { plan: Plan; variantId: string };

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
  plan: CartPlan | null;
  totals: CartTotals;
  monthlyTotal: number;
  monthlySavings: number;

  changeProductQuantity: (
    product: Product,
    variantId: string,
    quantity: number,
  ) => void;
  setPlan: (plan: Plan, variantId: string) => void;
  clearPlan: () => void;
  saveCart: () => void;
}
