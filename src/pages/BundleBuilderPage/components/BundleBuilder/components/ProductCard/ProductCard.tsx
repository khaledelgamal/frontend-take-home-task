import { useState } from "react";
import { type Product } from "../../../../types/product.types";
import ProductCardImage from "./components/ProductCardImage/ProductCardImage";
import ProductCardDetails from "./components/ProductCardDetails/ProductCardDetails";
import { useCartStore } from "../../../../store/useCartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0].variant_id,
  );
  const activeVariant =
    product.variants.find((v) => v.variant_id === selectedVariantId) ||
    product.variants[0];
  const products = useCartStore((state) => state.products);
  const cartProduct = products.find(
    (p) =>
      p.product.id === product.id && p.variantId === activeVariant.variant_id,
  );

  const quantity = cartProduct?.quantity || 0;
  const isHighlighted = quantity > 0;

  return (
    <div
      className={`relative p-2.75 bg-white rounded-10 flex gap-4.75 flex-col lg:flex-row border transition-colors flex-shrink-0 w-[225px] lg:w-full h-full ${isHighlighted ? "border-purple" : "border-transparent"}`}
    >
      {/* Discount Badge */}
      {activeVariant.discount_percentage && (
        <div className="absolute top-2.75 left-2.75 bg-purple text-white text-[11px] flex items-center justify-center font-bold px-2 py-0.5 rounded-full z-10">
          Save {activeVariant.discount_percentage}%
        </div>
      )}

      <ProductCardImage product={product} imageUrl={activeVariant?.img_url} />
      <ProductCardDetails
        product={product}
        activeVariant={activeVariant}
        onSelectVariant={setSelectedVariantId}
        quantity={quantity}
      />
    </div>
  );
};

export default ProductCard;
