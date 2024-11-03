import { FC } from 'react';
interface TorresHeaderCardProcessingProps {
    title: string;
    status: {
        label: string;
        value: string;
    };
    urlRedirection: string;
    modelType?: string;
}
declare const TorresHeaderCardProcessing: FC<TorresHeaderCardProcessingProps>;
export default TorresHeaderCardProcessing;
