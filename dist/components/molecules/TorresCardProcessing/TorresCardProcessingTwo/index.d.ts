import { FC } from 'react';
interface TorresCardProcessingTwoProps {
    header: {
        title: string;
        urlRedirection: string;
        status: {
            label: string;
            value: string;
        };
    };
    configSteps: {
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
    }[];
    deliveryDate: string;
    error?: {
        title?: string;
        label: string;
    };
}
declare const TorresCardProcessingTwo: FC<TorresCardProcessingTwoProps>;
export default TorresCardProcessingTwo;
