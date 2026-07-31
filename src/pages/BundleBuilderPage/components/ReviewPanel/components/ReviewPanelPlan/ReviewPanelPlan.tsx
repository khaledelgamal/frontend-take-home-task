import { useCartStore } from "@/pages/BundleBuilderPage/store/useCartStore";
import PriceDisplay from "../ReviewPanelItem/components/PriceDisplay/PriceDisplay";
import DOMPurify from "dompurify";

const ReviewPanelPlan = () => {
  const { plan, variantId } = useCartStore((state) => state.plan);

  const variant =
    plan.variants.find((v) => v.variant_id === variantId) || plan.variants[0];

  return (
    <div className="border-t pt-[15px] border-gray-400">
      <h3 className="text-xs text-gray-500 uppercase tracking-[3%] leading-4 mb-2">
        Plan
      </h3>
      <div className="flex items-stretch justify-between">
        <div className="flex items-center gap-0.75 flex-1">
          <img
            src="/images/plan-img.svg"
            alt="Plan"
            className="max-w-full max-h-full object-contain"
          />

          <span
            className="font-bold text-black flex-1 leading-[100%] tracking-[-0.2px]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(plan.title) }}
          />
        </div>

        <div className="flex items-stretch">
          <PriceDisplay
            price={`${variant.price}/mo`}
            oldPrice={
              variant.sale_price ? `${variant.sale_price}/mo` : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewPanelPlan;
