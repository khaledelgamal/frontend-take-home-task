import DOMPurify from "dompurify";
import type { Plan } from "../../../../../../types/plan.types";
import { CheckIcon } from "./icons/CheckIcon";
import { useCartStore } from "../../../../../../store/useCartStore";

export const PlanCard = ({ plan }: { plan: Plan }) => {
  const cartPlan = useCartStore((state) => state.plan);
  const setPlan = useCartStore((state) => state.setPlan);
  const clearPlan = useCartStore((state) => state.clearPlan);

  const isSelected = cartPlan?.plan.id === plan.id;

  const activeVariant = plan.variants[0];

  const toggleSelect = () => {
    if (isSelected) {
      clearPlan();
    } else {
      setPlan(plan, activeVariant.variant_id);
    }
  };

  return (
    <div
      className={`relative p-5 bg-white rounded-10 flex flex-col border transition-colors lg:w-full h-full flex-shrink-0 w-[260px] lg:w-auto ${isSelected ? "border-purple shadow-sm" : "border-gray-300"}`}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-[11px] font-bold px-3 py-1 rounded-full z-10 tracking-wide">
          RECOMMENDED
        </div>
      )}

      <div className="flex-1">
        <h3
          className="text-lg font-bold text-gray-900 mb-4 text-center"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(plan.title) }}
        />

        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start text-sm text-gray-600 leading-tight"
            >
              <CheckIcon className="w-4 h-4 mr-2 mt-0.5 text-teal flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-gray-200 h-px " />
      <div className="pt-4 mt-auto">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              {activeVariant.sale_price && (
                <span className="text-[13px] text-red-600 line-through">
                  ${activeVariant.sale_price}
                </span>
              )}
              <div className="text-xl font-bold text-gray-900 leading-none">
                ${activeVariant.price}/mo
              </div>
            </div>
            <div className="text-[11px] text-gray-500 font-medium h-[16px]">
              {activeVariant.description || ""}
            </div>
          </div>

          <button
            onClick={toggleSelect}
            className={`px-4 py-2 rounded-[4px] text-[13px] font-semibold transition-colors cursor-pointer ${
              isSelected
                ? "bg-purple text-white hover:bg-purple/90"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};
