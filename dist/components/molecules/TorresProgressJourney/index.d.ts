import { FC } from 'react';
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
declare const TorresProgressJourney: FC<TorresProgressJourneyProps>;
export default TorresProgressJourney;
