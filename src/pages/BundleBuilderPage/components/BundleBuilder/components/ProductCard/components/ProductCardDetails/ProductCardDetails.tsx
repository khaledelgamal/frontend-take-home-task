import QuantityInput from "../../../../../QuantityInput/QuantityInput";
import type { Product, Variant } from "../../../../../../types/product.types";
// import { Link } from "react-router-dom";
import { toast } from "sonner";

interface ProductCardDetailsProps {
  product: Product;
  activeVariant: Variant;
  onSelectVariant: (id: string) => void;
  quantity: number;
}

const ProductCardDetails = ({
  product,
  activeVariant,
  onSelectVariant,
  quantity,
}: ProductCardDetailsProps) => {
  return (
    <div className="flex-1 flex flex-col justify-between lg:justify-center">
      <div className="tracking-[0.6px]">
        <h4 className="font-semibold text-neutral-900">
          {product.title} {product.is_required ? "(Required)" : ""}
        </h4>
        <div className="text-xs text-neutral-900/75 font-medium mt-2 leading-[130%]">
          {product.description}{" "}
          {/* <Link to={`/products/${product.id}`} className="text-purple text-[13px] underline hover:no-underline font-medium">Learn More</Link> */}
          <button
            onClick={() =>
              toast.success(`Navigating to /products/${product.id}`)
            }
            className="text-blue inline underline hover:no-underline font-medium cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Variant Selector */}
      {product.variants.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {product.variants.map((v) => (
            <button
              key={v.variant_id}
              onClick={() => onSelectVariant(v.variant_id)}
              className={`flex items-center gap-0.5 pr-1 rounded-sm border border-gray-350 hover:border-gray-500 hover:bg-gray-100 bg-white transition-colors cursor-pointer ${
                activeVariant.variant_id === v.variant_id
                  ? "border-teal bg-mint-400/4 hover:bg-mint-400/8"
                  : ""
              }`}
            >
              <img
                src={v.img_url}
                alt={v.color}
                className="w-7 h-7 object-contain"
              />
              <span className="text-[10px] font-medium text-neutral-900 tracking-[0.6px]">
                {v.color}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Quantity and Price */}
      <div className="flex items-end justify-between mt-2.5">
        <QuantityInput
          value={quantity}
          enabledClassName="bg-gray-200 text-slate-600 hover:bg-gray-350 cursor-pointer transition-colors"
        />
        <div
          className={`flex flex-col items-end tracking-[0.6px] leading-[100%] ${!activeVariant.sale_price && "h-full flex-row! items-center! justify-center!"}`}
        >
          {activeVariant.sale_price && (
            <span className="text-red-600 line-through mb-0.75">
              ${activeVariant.sale_price}
            </span>
          )}
          <span className="text-gray-700 ">
            {activeVariant.price === "0" ? "Free" : `$${activeVariant.price}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
