import type { Product } from "../ProductCard/product.types";

export const SENSOR_PRODUCTS: Product[] = [
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
        sale_price: "$12.99",
        price: "$9.99",
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
        price: "$14.99",
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
        price: "$19.99",
        stock_quantity: 50,
        img_url: "/images/wyze-leak-sensor.png",
      },
    ],
  },
];
