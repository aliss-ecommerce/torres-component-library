import { FC } from 'react';
import { ItemCart } from '../../../types';
interface TorresItemCartProps {
    itemSummary: ItemCart;
    removeItem: (id: string) => void;
    updateItem: (product: ItemCart) => void;
}
declare const TorresItemCart: FC<TorresItemCartProps>;
export default TorresItemCart;
