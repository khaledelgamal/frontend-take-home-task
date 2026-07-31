import type { Product } from "../ProductCard/product.types";

export const SENSOR_PRODUCTS: Product[] = [
  {
    id: "wyze-sense-hub",
    title: "Wyze Sense Hub",
    description:
      "Connects your Wyze sensors to your home network and features a built-in siren.",
    type: "sensor",
    is_required: true,
    img_url: "/images/wyze-sense-hub.png",
    variants: [
      {
        variant_id: "sense-hub-white",
        color: "White",
        price: "0",
        sale_price: "29.92",
        discount_percentage: "100",
        stock_quantity: 50,
        img_url: "/images/wyze-sense-hub.png",
      },
    ],
  },
  {
    id: "wyze-motion-sensor",
    title: "Wyze Sense Motion Sensor",
    description: "Know when doors and windows are opened or closed.",
    type: "sensor",
    img_url: "/images/wyze-motion-sensor.png",
    variants: [
      {
        variant_id: "motion-v1-white",
        color: "White",
        price: "9.99",
        sale_price: "12.99",
        discount_percentage: "23",
        stock_quantity: 50,
        img_url: "/images/wyze-motion-sensor.png",
      },
    ],
  },
  {
    id: "wyze-motion-sensor-v2",
    title: "Wyze Motion Sensor v2",
    description: "Detects motion up to 25 feet away with a 120° field of view.",
    type: "sensor",
    img_url: "/images/wyze-motion-sensor-v2.png",
    variants: [
      {
        variant_id: "motion-v2-white",
        color: "White",
        price: "14.99",
        stock_quantity: 50,
        img_url: "/images/wyze-motion-sensor-v2.png",
      },
    ],
  },
  {
    id: "wyze-leak-sensor",
    title: "Wyze Leak Sensor",
    description: "Get notified instantly when a leak is detected.",
    type: "sensor",
    img_url: "/images/wyze-leak-sensor.png",
    variants: [
      {
        variant_id: "leak-white",
        color: "White",
        price: "19.99",
        stock_quantity: 50,
        img_url: "/images/wyze-leak-sensor.png",
      },
    ],
  },
];
