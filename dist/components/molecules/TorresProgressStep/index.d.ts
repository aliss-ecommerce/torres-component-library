import { FC } from 'react';
interface TorresProgressStepProps {
    icon: string;
    isCompleted?: boolean;
    isCurrentStep: boolean;
    isCompressed?: boolean;
    isFirts?: boolean;
    isLast?: boolean;
    error?: string;
    description: {
        title: string;
        description: string;
        descriptionSuccess: string;
        startDate: string;
    };
}
declare const TorresProgressStep: FC<TorresProgressStepProps>;
export default TorresProgressStep;
