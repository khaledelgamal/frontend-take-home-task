import { toast } from "sonner";
import { useCartStore } from "../../../../store/useCartStore";

const ReviewPanelTotal = () => {
  const totals = useCartStore((state) => state.totals);
  const monthlyTotal = useCartStore((state) => state.monthlyTotal);
  const monthlySavings = useCartStore((state) => state.monthlySavings);
  const saveCart = useCartStore((state) => state.saveCart);
  const totalSavings = totals.totalSavings + monthlySavings;

  const handleCheckout = () => {
    toast.success("Checkout initiated successfully!");
  };
  const handleSaveCart = () => {
    saveCart();
    toast.success("Your bundle has been saved successfully!");
  };
  return (
    <div className="mt-6 border-t border-gray-400 pt-6 md:mt-0 md:border-t-0 md:pt-0 lg:mt-6 lg:border-t lg:border-gray-400 lg:pt-6">
      {/* Badge and Text Section (Tablet & Large Mobile) */}
      <div className="hidden min-[500px]:flex lg:hidden items-center gap-6.25 mb-6">
        <div className="w-[131px] h-[131px] flex-shrink-0">
          <img
            src="/images/Satisfaction Badge-05.png"
            alt="Satisfaction Guarantee"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div>
          <h4 className="text-neutral-900 font-semibold text-lg mb-1 tracking-[0.6px]">
            30-day hassle-free returns
          </h4>
          <p className="text-neutral-900 text-lg tracking-[0.6px]">
            If you're not totally in love with the product, we will refund you
            100%.
          </p>
        </div>
      </div>

      {/* Pricing Section & Mobile/Desktop Badge */}
      <div className="flex items-center justify-between mb-4">
        {/* Badge: Visible below 500px and on desktop, hidden on tablet/large mobile */}
        <div className="w-[78px] h-[78px] min-[500px]:hidden lg:block">
          <img
            src="/images/Satisfaction Badge-05.png"
            alt="Satisfaction Guarantee"
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        {/* Pricing Info */}
        <div className="flex flex-col items-end min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between min-[500px]:w-full lg:flex-col lg:items-end lg:w-auto">
          {monthlyTotal > 0 && (
            <div className="bg-purple text-white text-xs font-medium tracking-[-5%] px-2.5 py-1 rounded-[4px] mb-2 min-[500px]:mb-0 lg:mb-2">
              as low as ${monthlyTotal.toFixed(2)}/mo
            </div>
          )}
          <div className="flex items-baseline gap-2">
            {totals.totalPriceWithoutDiscounts > totals.totalPrice && (
              <span className="text-gray-600 line-through text-lg font-medium tracking-[0.25%] leading-5">
                ${totals.totalPriceWithoutDiscounts.toFixed(2)}
              </span>
            )}
            <span className="text-purple text-2xl font-bold tracking-[-0.13%] leading-8 ">
              ${totals.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {totalSavings > 0 && (
        <p className="text-teal font-semibold text-xs text-center mb-4">
          Congrats! You're saving ${totalSavings.toFixed(2)} on your security
          bundle!
        </p>
      )}

      <button
        onClick={handleCheckout}
        className="w-full bg-purple hover:opacity-90 text-white font-bold text-[17px] py-[13px] rounded-sm transition-opacity mb-2 cursor-pointer"
      >
        Checkout
      </button>

      <div className="text-center">
        <button
          onClick={handleSaveCart}
          className="text-neutral-700 italic underline text-sm hover:text-gray-900 transition-colors cursor-pointer tracking-[0.5%] leading-[120%]"
        >
          Save my system for later
        </button>
      </div>
    </div>
  );
};

export default ReviewPanelTotal;
