import { PLAN_PRODUCTS } from "./data";
import { PlanCard } from "./components/PlanCard/PlanCard";

const PlanSelection = () => {
  return (
    <div className="w-full pt-1 pb-6 lg:pb-8">
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-4 pb-4 lg:pb-0 snap-x">
        {PLAN_PRODUCTS.map((plan, index) => {
          const isLastAndOdd =
            index === PLAN_PRODUCTS.length - 1 &&
            PLAN_PRODUCTS.length % 2 !== 0;
          return (
            <div
              key={plan.id}
              className={`snap-start mt-4 ${isLastAndOdd ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.5rem)]" : ""}`}
            >
              <PlanCard plan={plan} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanSelection;
