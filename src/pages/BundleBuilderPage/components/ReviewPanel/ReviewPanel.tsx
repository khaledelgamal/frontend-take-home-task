import ReviewPanelItems from "./components/ReviewPanelItems/ReviewPanelItems";
import ReviewPanelTotal from "./components/ReviewPanelTotal/ReviewPanelTotal";

const mockCameras = [
  {
    title: "Wyze Cam v4",
    price: "$27.98",
    oldPrice: "$35.98",
    quantity: 1,
    image_url: "https://placehold.co/100x100?text=Cam",
  },
  {
    title: "Wyze Cam Pan v3",
    price: "$47.98",
    oldPrice: "$57.98",
    quantity: 2,
    image_url: "https://placehold.co/100x100?text=Pan",
  },
];

const mockSensors = [
  {
    title: "Wyze Sense Motion Sensor",
    price: "$59.98",
    quantity: 2,
    image_url: "https://placehold.co/100x100?text=Sensor",
  },
  {
    title: "Wyze Sense Hub (Required)",
    price: "FREE",
    oldPrice: "$29.92",
    quantity: 1,
    image_url: "https://placehold.co/100x100?text=  ",
  },
];

const mockAccessories = [
  {
    title: "Wyze MicroSD Card (256GB)",
    price: "$41.96",
    quantity: 2,
    image_url: "https://placehold.co/100x100?text=SD",
  },
];

const mockPlan = [
  {
    title: (
      <span className="font-bold flex items-center gap-1 tracking-[-0.2%]">
        Cam <span className="text-purple">Unlimited</span>
      </span>
    ),
    price: "$9.99/mo",
    oldPrice: "$12.99/mo",
    image_url: "https://placehold.co/100x100?text=Plan",
  },
];

const mockShipping = [
  {
    title: "Fast Shipping",
    price: "FREE",
    oldPrice: "$5.99",
    image_url: "/icons/carbon_delivery.svg",
  },
];

const ReviewPanel = () => {
  return (
    <section className="rounded-10 bg-blue-50 p-[15px]">
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
            <ReviewPanelItems
              type="cameras"
              title="Cameras"
              items={mockCameras}
            />
            <ReviewPanelItems
              type="sensors"
              title="Sensors"
              items={mockSensors}
            />
            <ReviewPanelItems
              type="accessories"
              title="Accessories"
              items={mockAccessories}
            />
            <ReviewPanelItems type="plan" title="Plan" items={mockPlan} />
            <ReviewPanelItems type="shipping" title="" items={mockShipping} />
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
