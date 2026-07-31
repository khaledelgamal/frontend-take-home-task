export interface PriceDisplayProps {
  price: string;
  oldPrice?: string;
}

const PriceDisplay = ({ price, oldPrice }: PriceDisplayProps) => {
  return (
    <div
      className={`flex flex-col h-full items-end  ml-4 min-w-[50px] ${
        oldPrice ? "justify-start" : "justify-center"
      }`}
    >
      {oldPrice && (
        <span className="text-sm text-gray-600 font-medium line-through tracking-[0.5%] leading-none">
          ${oldPrice}
        </span>
      )}
      <span className="text-sm font-semibold text-purple tracking-[0.5%] leading-none">
        {price === "0" ? "FREE" : `$${price}`}
      </span>
    </div>
  );
};

export default PriceDisplay;
