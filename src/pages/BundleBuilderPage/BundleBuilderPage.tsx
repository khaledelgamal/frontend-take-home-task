import BundleBuilder from "./components/BundleBuilder/BundleBuilder";
import ReviewPanel from "./components/ReviewPanel/ReviewPanel";

const BundleBuilderPage = () => {
  return (
    <div className="w-full max-w-[1196px] min-w-[390px] mx-auto p-0 md:py-4 md:px-6 lg:py-8 lg:px-8 min-[1440px]:py-[50px] flex flex-col lg:flex-row gap-[29px]">
      <div className="w-full lg:w-2/3">
        <BundleBuilder />
      </div>
      <div className="w-full lg:w-1/3 min-w-[390px] ">
        <ReviewPanel />
      </div>
    </div>
  );
};

export default BundleBuilderPage;
