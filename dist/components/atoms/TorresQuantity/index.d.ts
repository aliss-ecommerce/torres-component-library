import { default as React } from 'react';
interface QuantityProps {
    initialQuantity: number;
    onQuantityChange: (quantity: number) => void;
    variant?: string;
    size?: string;
}
declare const TorresQuantity: React.FC<QuantityProps>;
export default TorresQuantity;
