import { useState } from "react";
import DOMPurify from "dompurify";
import type { Plan } from "../../../../../../types/plan.types";
import { CheckIcon } from "./icons/CheckIcon";
export const PlanCard = ({ plan }: { plan: Plan }) => {
  const [selectedVariantId, setSelectedVariantId] = useState(
    plan.variants[0].variant_id,
  );
  const activeVariant =
    plan.variants.find((v) => v.variant_id === selectedVariantId) ||
    plan.variants[0];
  const [isSelected, setIsSelected] = useState(false);

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
        <div className="flex gap-2 mb-4">
          {plan.variants.map((v) => (
            <button
              key={v.variant_id}
              onClick={() => setSelectedVariantId(v.variant_id)}
              className={`flex-1 py-1.5 px-2 text-[13px] font-medium rounded-[4px] border transition-colors cursor-pointer ${
                activeVariant.variant_id === v.variant_id
                  ? "border-gray-900 text-gray-900"
                  : "border-gray-300 text-gray-500 hover:border-gray-400"
              }`}
            >
              {v.billing_cycle}
            </button>
          ))}
        </div>

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
            onClick={() => setIsSelected(!isSelected)}
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
