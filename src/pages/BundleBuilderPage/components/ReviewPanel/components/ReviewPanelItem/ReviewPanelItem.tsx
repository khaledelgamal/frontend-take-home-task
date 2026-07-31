import QuantityInput from "../../../QuantityInput/QuantityInput";
import type { ReviewItem } from "../../types/review.types";
import PriceDisplay from "./components/PriceDisplay/PriceDisplay";

export interface ReviewPanelItemProps {
  item: ReviewItem;
}

const ReviewPanelItem = ({ item }: ReviewPanelItemProps) => {
  const parsePrice = (priceStr: string) => {
    if (!priceStr) return 0;
    const num = parseFloat(priceStr);
    return isNaN(num) ? 0 : num;
  };

  let displayPrice = item.price;
  let displayOldPrice = item.oldPrice;

  if (item.quantity !== undefined) {
    const qty = item.quantity;
    const p = parsePrice(item.price) * qty;

    displayPrice = p.toFixed(2);

    if (item.oldPrice) {
      const o = parsePrice(item.oldPrice) * qty;
      displayOldPrice = o.toFixed(2);
    }
  }

  return (
    <div className="flex items-stretch justify-between">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-[41px] h-[41px] bg-white rounded-[5px] p-1 overflow-hidden flex items-center justify-center">
          <img
            src={item.image_url}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <span className="text-sm font-medium text-gray-900 flex-1">
          {item.title} {item.is_required && "(Required)"}
        </span>

        {item.quantity !== undefined && (
          <QuantityInput
            value={item.quantity}
            onChange={item.onQuantityChange}
            disabled={item.is_required && parsePrice(item.price) === 0}
          />
        )}
      </div>

      <div className="flex items-stretch">
        <PriceDisplay price={displayPrice} oldPrice={displayOldPrice} />
      </div>
    </div>
  );
};

export default ReviewPanelItem;
