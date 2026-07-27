import QuantityInput from "../../../QuantityInput/QuantityInput";
import PriceDisplay from "./components/PriceDisplay/PriceDisplay";

export interface ReviewPanelItemProps {
  item: any;
}

const ReviewPanelItem = ({ item }: ReviewPanelItemProps) => {
  return (
    <div className="flex items-stretch justify-between">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-[41px] w-[41px] bg-white rounded-[5px] p-1 overflow-hidden flex items-center justify-center">
          <img
            src={item.image_url}
            alt={item.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <span className="text-sm font-medium text-gray-900 flex-1">
          {item.title}
        </span>
        {item.quantity !== undefined && (
          <QuantityInput value={item.quantity} />
        )}
      </div>

      <div className="flex items-stretch">
        <PriceDisplay price={item.price} oldPrice={item.oldPrice} />
      </div>
    </div>
  );
};

export default ReviewPanelItem;
