import * as Accordion from "@radix-ui/react-accordion";
import { type ReactNode } from "react";

interface BundleStepProps {
  id: string;
  stepNumber: number;
  totalSteps: number;
  title: string;
  icon: string;
  children: ReactNode;
  selectionText?: string;
  nextStepTitle?: string;
  moveToNextStep?: () => void;
}

const BundleStep = ({
  id,
  stepNumber,
  totalSteps,
  title,
  icon,
  children,
  selectionText,
  nextStepTitle,
  moveToNextStep,
}: BundleStepProps) => {
  return (
    <Accordion.Item
      value={id}
      className="w-full md:data-[state=open]:rounded-10! transition-colors data-[state=open]:bg-blue-50 data-[state=closed]:border-b data-[state=closed]:border-neutral-900 has-[+_[data-state=open]]:border-transparent!"
    >
      <div className="pt-3.75">
        <p className="text-xs font-medium text-neutral-700 uppercase tracking-[1.6px] border-b border-neutral-900 px-3.75 pb-1.25">
          Step {stepNumber} of {totalSteps}
        </p>
      </div>
      <div className="m-0">
        <Accordion.Header className="m-0 py-5 px-3.75">
          <Accordion.Trigger className="group flex items-center justify-between w-full bg-transparent border-none outline-none cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src={icon}
                alt={title}
                className="w-6.5 h-6.5 object-contain"
              />
              <h3 className="text-[22px] font-semibold text-gray-900">
                {title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-purple font-medium text-sm">
                {selectionText}
              </span>
              {/* The arrows swap based on data-[state] */}
              <img
                src="/icons/carrot-down.svg"
                alt="Expand"
                className="w-3.5 h-3.5 group-data-[state=open]:hidden"
              />
              <img
                src="/icons/carrot-up.svg"
                alt="Collapse"
                className="w-3.5 h-3.5 hidden group-data-[state=open]:block"
              />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <div className="py-5 px-3.75">
            {children}
            {moveToNextStep && nextStepTitle && (
              <div className="flex justify-center">
                <button
                  onClick={moveToNextStep}
                  className="bg-transparent py-2 px-6 border border-purple text-purple rounded-[7px] font-semibold text-lg hover:bg-purple/5 transition-colors cursor-pointer"
                >
                  Next: {nextStepTitle}
                </button>
              </div>
            )}
          </div>
        </Accordion.Content>
      </div>
    </Accordion.Item>
  );
};

export default BundleStep;
