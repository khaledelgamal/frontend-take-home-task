import type { Plan } from "../../types/plan.types";
import type { PlanTotals } from "../cartStore.types";

export const calculatePlanPrice = (
  plan: Plan | null,
  variantId: string | null,
): PlanTotals => {
  if (!plan || !variantId) {
    return { monthlyTotal: 0, monthlySavings: 0 };
  }

  const variant = plan.variants.find((v) => v.variant_id === variantId);
  if (!variant) {
    return { monthlyTotal: 0, monthlySavings: 0 };
  }

  const parsePrice = (priceStr: string) => {
    const num = parseFloat(priceStr);
    return isNaN(num) ? 0 : num;
  };

  const currentPrice = parsePrice(variant.price);
  const originalPrice = variant.sale_price
    ? parsePrice(variant.sale_price)
    : currentPrice;

  return {
    monthlyTotal: currentPrice,
    monthlySavings: originalPrice - currentPrice,
  };
};
