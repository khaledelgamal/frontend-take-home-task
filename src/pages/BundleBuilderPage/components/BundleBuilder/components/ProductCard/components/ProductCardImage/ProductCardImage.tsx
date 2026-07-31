import type { Product } from "../../../../../../types/product.types";

const ProductCardImage = ({ product }: { product: Product }) => {
  return (
    <div className="w-full lg:w-1/3 flex-shrink-0 flex items-center justify-center pt-4 lg:pt-0 pb-4 lg:pb-0">
      <img
        src={product.img_url}
        alt={product.title}
        className="w-[203px] h-[118px] lg:w-[101px] lg:h-[137px] object-contain"
      />
    </div>
  );
};

export default ProductCardImage;
