import ReviewPanelItems from "./components/ReviewPanelItems/ReviewPanelItems";
import ReviewPanelPlan from "./components/ReviewPanelPlan/ReviewPanelPlan";
import ReviewPanelTotal from "./components/ReviewPanelTotal/ReviewPanelTotal";

import { useCartStore } from "../../store/useCartStore";
import type { CartProduct } from "../../store/cartStore.types";
import type { ReviewItem } from "./types/review.types";

const mockShipping: ReviewItem[] = [
  {
    title: "Fast Shipping",
    price: "0",
    oldPrice: "5.99",
    image_url: "/icons/carbon_delivery.svg",
  },
];

const ReviewPanel = () => {
  const products = useCartStore((state) => state.products);
  const plan = useCartStore((state) => state.plan);
  const changeProductQuantity = useCartStore(
    (state) => state.changeProductQuantity,
  );

  const mapProductToReviewItem = (cartProduct: CartProduct): ReviewItem => {
    const variant = cartProduct.product.variants.find(
      (v) => v.variant_id === cartProduct.variantId,
    );
    return {
      title: cartProduct.product.title,
      image_url: variant?.img_url ?? "",
      quantity: cartProduct.quantity,
      price: variant?.price || "0",
      oldPrice: variant?.sale_price || undefined,
      onQuantityChange: (newValue: number) => {
        changeProductQuantity(
          cartProduct.product,
          cartProduct.variantId,
          newValue,
        );
      },
      is_required: cartProduct.product.is_required,
    };
  };

  const camerasProducts = products
    .filter((p) => p.product.type === "camera")
    .map(mapProductToReviewItem);
  const sensorProducts = products
    .filter((p) => p.product.type === "sensor")
    .map(mapProductToReviewItem);
  const accessoryProducts = products
    .filter((p) => p.product.type === "accessory")
    .map(mapProductToReviewItem);

  return (
    <section className="md:rounded-10 bg-blue-50 p-[15px]">
      <p className="font-medium text-xs text-neutral-700 uppercase tracking-[1.6px]">
        review
      </p>
      <div className="px-[5px] py-[25px]">
        <div className="flex flex-col md:flex-row md:gap-10 lg:flex-col lg:gap-0">
          <div className="flex flex-col gap-2.5 flex-1">
            <header className=" mb-2.5">
              <h2 className="text-[22px] font-semibold text-neutral-900">
                Your security system
              </h2>
              <p className="font-medium text-sm text-neutral-900/75 leading-[130%] tracking-[0.6px]">
                Review your personalized protection system designed to keep what
                matters most safe.
              </p>
            </header>
            {camerasProducts.length > 0 && (
              <ReviewPanelItems title="Cameras" items={camerasProducts} />
            )}
            {sensorProducts.length > 0 && (
              <ReviewPanelItems title="Sensors" items={sensorProducts} />
            )}
            {accessoryProducts.length > 0 && (
              <ReviewPanelItems title="Accessories" items={accessoryProducts} />
            )}
            {plan && <ReviewPanelPlan />}
            <ReviewPanelItems title="" items={mockShipping} />
          </div>

          <div className="md:w-[400px] lg:w-auto">
            <ReviewPanelTotal />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReviewPanel;
