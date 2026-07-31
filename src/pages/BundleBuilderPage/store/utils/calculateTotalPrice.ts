import type { CartProduct, CartTotals } from "../cartStore.types";

export const calculateTotalPrice = (products: CartProduct[]): CartTotals => {
  let totalPrice = 0;
  let totalPriceWithoutDiscounts = 0;

  products.forEach(({ product, variantId, quantity }) => {
    const variant = product.variants.find((v) => v.variant_id === variantId);
    if (!variant) return;

    const parsePrice = (priceStr: string) => {
      if (!priceStr) return 0;
      const num = parseFloat(priceStr);
      return isNaN(num) ? 0 : num;
    };

    const currentPrice = parsePrice(variant.price);
    const originalPrice = variant.sale_price
      ? parsePrice(variant.sale_price)
      : currentPrice;

    totalPrice += currentPrice * quantity;
    totalPriceWithoutDiscounts += originalPrice * quantity;
  });

  const totalSavings = totalPriceWithoutDiscounts - totalPrice;

  return {
    totalPrice,
    totalPriceWithoutDiscounts,
    totalSavings,
  };
};
