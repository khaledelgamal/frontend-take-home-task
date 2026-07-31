import type { ReviewItem } from "../../types/review.types";
import ReviewPanelItem from "../ReviewPanelItem/ReviewPanelItem";

export interface ReviewPanelItemsProps {
  title: string;
  items: ReviewItem[];
}

const ReviewPanelItems = ({ title, items }: ReviewPanelItemsProps) => {
  return (
    <div className="border-t pt-[15px] border-gray-400">
      {title && (
        <h3 className="text-xs text-gray-500 uppercase tracking-[3%] leading-4 mb-2">
          {title}
        </h3>
      )}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <ReviewPanelItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPanelItems;
