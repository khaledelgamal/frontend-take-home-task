import type { Plan } from "../../../../types/plan.types";

export const PLAN_PRODUCTS: Plan[] = [
  {
    id: "cam-unlimited",
    title: 'Cam <span class="text-purple">Unlimited</span>',
    recommended: true,
    features: [
      "Unlimited video length",
      "Person, Pet, and Vehicle Detection",
      "Event recording with no cooldown",
      "Exclusive discounts on Wyze products",
    ],
    variants: [
      {
        variant_id: "cam-unlimited-monthly",
        billing_cycle: "Monthly",
        price: "12.99",
      },
      {
        variant_id: "cam-unlimited-annual",
        billing_cycle: "Annual",
        sale_price: "12.99",
        price: "9.99",
        description: "Billed $119.88 annually",
      },
    ],
  },
  {
    id: "cam-protect",
    title: 'Cam <span class="text-purple">Protect</span>',
    features: [
      "Includes all Cam Plus features",
      "24/7 Professional Monitoring",
      "Video verification for faster police response",
      "Facial Recognition",
    ],
    variants: [
      {
        variant_id: "cam-protect-monthly",
        billing_cycle: "Monthly",
        price: "3.99",
      },
      {
        variant_id: "cam-protect-annual",
        billing_cycle: "Annual",
        sale_price: "3.99",
        price: "3.33",
        description: "Billed $39.96 annually",
      },
    ],
  },
];
