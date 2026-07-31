import type { Product } from "../../../../types/product.types";

export const PROTECTION_PRODUCTS: Product[] = [
  {
    id: "wyze-microsd-card-256",
    title: "Wyze MicroSD Card (256GB)",
    description: "Maximize your local storage capacity with 256GB of space.",
    type: "accessory",
    img_url: "/images/wyze-microsd-card-256.png",
    variants: [
      {
        variant_id: "microsd-256-default",
        color: "Black",
        price: "29.99",
        stock_quantity: 100,
        img_url: "/images/wyze-microsd-card-256.png",
      },
    ],
  },
  {
    id: "wyze-microsd-card-128",
    title: "Wyze MicroSD Card (128GB)",
    description: "Reliable local storage for continuous recording.",
    type: "accessory",
    img_url: "/images/wyze-microsd-card-128.png",
    variants: [
      {
        variant_id: "microsd-128-default",
        color: "Black",
        price: "19.99",
        stock_quantity: 100,
        img_url: "/images/wyze-microsd-card-128.png",
      },
    ],
  },
];
