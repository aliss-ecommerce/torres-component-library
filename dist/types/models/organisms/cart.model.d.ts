import { ReactNode } from 'react';
export interface ItemCart {
    productId: string;
    skuId: string;
    title: string;
    quantity: number;
    price: number;
    priceList: number;
    urlImage: string;
    size?: string;
    color?: string;
    type: string;
    slug: string;
}
export interface SummaryCartProps {
    items: ItemCart[];
    closeModal: () => void;
    removeItem: (id: string) => void;
    updateItem: (product: ItemCart) => void;
    onAction: () => void;
}
export interface CartModalProps {
    children?: ReactNode;
    updateToCart: (product: ItemCart) => void;
    removeToCart: (id: string) => void;
    cardProducts: ItemCart[];
    openCart: boolean;
    onActionCart: () => void;
}
