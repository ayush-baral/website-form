import React from "react";

const Stepper: React.FC<{ currentStep: number; totalSteps: number }> = ({
  currentStep,
  totalSteps,
}) => {
  const width = `${(currentStep / totalSteps) * 100}`;

  return (
    <>
      <h2 className="text-right">
        Step {currentStep}/{totalSteps}
      </h2>
      <div
        className={`w-full h-2 bg-[#E8EAEC] relative rounded-lg overflow-hidden`}
      >
        <div
          className={`h-[100%] bg-primary z-10`}
          style={{ width: `${width}%` }}
        />
      </div>
    </>
  );
};

export default Stepper;
