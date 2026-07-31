import { create } from "zustand";
import { calculateTotalPrice } from "./utils/calculateTotalPrice";
import { calculatePlanPrice } from "./utils/calculatePlanPrice";
import type { CartStore } from "./cartStore.types";
import { CAMERA_PRODUCTS } from "../components/BundleBuilder/components/CameraSelection/data";
import { SENSOR_PRODUCTS } from "../components/BundleBuilder/components/SensorSelection/data";
import { ACCESSORIES_PRODUCTS } from "../components/BundleBuilder/components/ExtraProtectionSelection/data";
import { PLAN_PRODUCTS } from "../components/BundleBuilder/components/PlanSelection/data";

const CART_STORAGE_KEY = "bundle-cart";

const defaultInitialData = {
  products: [
    {
      product: CAMERA_PRODUCTS[0],
      quantity: 1,
      variantId: CAMERA_PRODUCTS[0].variants[0].variant_id,
    },
    {
      product: CAMERA_PRODUCTS[1],
      quantity: 2,
      variantId: CAMERA_PRODUCTS[1].variants[0].variant_id,
    },
    {
      product: SENSOR_PRODUCTS[1],
      quantity: 2,
      variantId: SENSOR_PRODUCTS[1].variants[0].variant_id,
    },
    {
      product: SENSOR_PRODUCTS[0],
      quantity: 1,
      variantId: SENSOR_PRODUCTS[0].variants[0].variant_id,
    },
    {
      product: ACCESSORIES_PRODUCTS[0],
      quantity: 2,
      variantId: ACCESSORIES_PRODUCTS[0].variants[0].variant_id,
    },
  ],
  plan: {
    plan: PLAN_PRODUCTS[1],
    variantId: PLAN_PRODUCTS[1].variants[0].variant_id,
  },
  totals: {
    totalPrice: 177.9,
    totalPriceWithoutDiscounts: 231.82,
    totalSavings: 53.92,
  },
  monthlyTotal: parseFloat(PLAN_PRODUCTS[1].variants[0].price),
  monthlySavings:
    parseFloat(PLAN_PRODUCTS[1].variants[0].sale_price) -
    parseFloat(PLAN_PRODUCTS[1].variants[0].price),
};

const getInitialData = () => {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY);
  if (savedCart) {
    try {
      return JSON.parse(savedCart);
    } catch (e) {
      console.error("Failed to parse cart", e);
    }
  }

  return defaultInitialData;
};

export const useCartStore = create<CartStore>((set, get) => ({
  ...getInitialData(),

  changeProductQuantity: (product, variantId, quantity) =>
    set((state) => {
      const existingIndex = state.products.findIndex(
        (p) => p.product.id === product.id && p.variantId === variantId,
      );

      const newProducts = [...state.products];

      if (existingIndex >= 0) {
        if (quantity > 0) {
          newProducts[existingIndex].quantity = quantity;
        } else {
          newProducts.splice(existingIndex, 1);
        }
      } else if (quantity > 0) {
        newProducts.push({ product, variantId, quantity });
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

  saveCart: () => {
    const state = get();

    const dataToSave = {
      products: state.products,
      plan: state.plan,
      totals: state.totals,
      monthlyTotal: state.monthlyTotal,
      monthlySavings: state.monthlySavings,
    };

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(dataToSave));
  },
}));
