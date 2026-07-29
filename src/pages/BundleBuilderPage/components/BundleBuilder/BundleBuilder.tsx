import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import BundleStep from "./components/BundleStep/BundleStep";
import CameraSelection from "./components/CameraSelection/CameraSelection";
import PlanSelection from "./components/PlanSelection/PlanSelection";
import SensorSelection from "./components/SensorSelection/SensorSelection";
import ExtraProtectionSelection from "./components/ExtraProtectionSelection/ExtraProtectionSelection";

const steps = [
  {
    id: "step-1",
    title: "Choose your cameras",
    icon: "/icons/livestream.svg",
    selectionText: "2 selected",
    content: <CameraSelection />,
  },
  {
    id: "step-2",
    title: "Choose your plan",
    icon: "/icons/plans.svg",
    content: <PlanSelection />,
  },
  {
    id: "step-3",
    title: "Choose your sensors",
    icon: "/icons/sensors.svg",
    content: <SensorSelection />,
  },
  {
    id: "step-4",
    title: "Add extra protection",
    icon: "/icons/extras.svg",
    content: <ExtraProtectionSelection />,
  },
];

const BundleBuilder = () => {
  const [activeStep, setActiveStep] = useState<string>("step-1");

  const handleNextStep = (nextStepId: string) => {
    setActiveStep(nextStepId);
  };

  return (
    <div className="w-full">
      <Accordion.Root
        type="single"
        collapsible
        value={activeStep}
        onValueChange={(val) => {
          if (val) setActiveStep(val);
          else setActiveStep("");
        }}
        className="w-full"
      >
        {steps.map((step, index) => {
          const nextStep = steps[index + 1];

          return (
            <BundleStep
              key={step.id}
              id={step.id}
              stepNumber={index + 1}
              totalSteps={steps.length}
              title={step.title}
              icon={step.icon}
              selectionText={step.selectionText}
              nextStepTitle={nextStep?.title}
              moveToNextStep={
                nextStep ? () => handleNextStep(nextStep.id) : undefined
              }
            >
              {step.content}
            </BundleStep>
          );
        })}
      </Accordion.Root>
    </div>
  );
};

export default BundleBuilder;
