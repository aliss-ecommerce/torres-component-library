import { FC } from 'react';
interface CardProcessingOneProps {
    title: string;
    body: {
        title: string;
        description: string;
        percentage: number;
    };
    status: {
        label: string;
        value: string;
    };
    urlRedirection: string;
    percentage: number;
}
declare const CardProcessingOne: FC<CardProcessingOneProps>;
export default CardProcessingOne;
