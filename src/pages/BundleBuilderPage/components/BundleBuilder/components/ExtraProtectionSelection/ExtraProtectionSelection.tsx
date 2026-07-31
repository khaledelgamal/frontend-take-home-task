import { PROTECTION_PRODUCTS } from "./data";
import ProductCard from "../ProductCard/ProductCard";

const ExtraProtectionSelection = () => {
  return (
    <div className="w-full pt-1 pb-6 lg:pb-8">
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-4 pb-4 lg:pb-0 snap-x">
        {PROTECTION_PRODUCTS.map((product, index) => {
          const isLastAndOdd =
            index === PROTECTION_PRODUCTS.length - 1 &&
            PROTECTION_PRODUCTS.length % 2 !== 0;
          return (
            <div
              key={product.id}
              className={`snap-start ${isLastAndOdd ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.5rem)]" : ""}`}
            >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtraProtectionSelection;
