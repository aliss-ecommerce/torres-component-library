import { FC } from "react";

import "./style.scss";
import { TorresProgressStep } from "src/components/molecules";

interface Step {
  id: string;
  icon: string;
  currentStep: boolean;
  nextStepId: string | null;
  prevStepId: string | null;
  description: {
    title: string;
    description: string;
    descriptionSuccess: string;
    startDate: string;
  };
}

interface TorresProgressJourneyProps {
  steps: Step[];
  compressed: boolean;
  error?: {
    label: string;
  };
}
const TorresProgressJourney: FC<TorresProgressJourneyProps> = ({ steps, compressed, error }) => {
  const getIsCmpleted = (step: Step) => {
    if(step.currentStep &&step.id === steps[steps.length - 1].id){
      return true;
    }
    if(error){
      return false;
    }
    let currentStep = steps.find((step) => step.currentStep);
    while (currentStep?.prevStepId) {
      if (currentStep?.prevStepId === step.id) {
        return true
      }
      currentStep = steps.find((step) => step.id === currentStep?.prevStepId);
    }
    return false;
  }

  return (
    <div
      className={`torres-progressJourney torres-progressJourney--${
        compressed ? "compressed" : "expanded"
      }`}
    >
      <div className="torres-progressJourney__step-init">
        <TorresProgressStep
          key={steps[0].id}
          icon={steps[0].icon}
          isCurrentStep={Boolean(steps[0].currentStep || error)}
          description={steps[0].description}
          isFirts={true}
          isCompleted={getIsCmpleted(steps[0])}
          isCompressed={compressed}
          isLast={false}
          error={error?.label}
        />
      </div>
      <div className="torres-progressJourney__container">
        {steps.slice(1).map((step) => (
          <TorresProgressStep
            key={step.id}
            icon={step.icon}
            isCurrentStep={step.currentStep}
            description={step.description}
            isFirts={false}
            isCompleted={getIsCmpleted(step)}
            isCompressed={compressed}
            isLast={step.id === steps[steps.length - 1].id}
            error={error?.label}
          />
        ))}
      </div>
    </div>
  );
};

export default TorresProgressJourney;
