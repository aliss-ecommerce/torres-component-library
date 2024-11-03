import { default as React, FC } from 'react';
interface TorresCardDataProps {
    label?: string;
    data: {
        title: string;
        value: string | string[];
    }[];
    activeBorder?: boolean;
    action?: {
        onClick: () => void;
        iconAction: React.ReactNode;
    };
}
declare const TorresCardData: FC<TorresCardDataProps>;
export default TorresCardData;
