import { FC, useEffect, useState } from "react";
import { CartModalProps, ICONS_NAMES } from "../../../types";
import { TorresButtonIcon } from "components/atoms";
import { TorresModalContent, TorresSummaryCart } from "components/molecules";

import "./style.scss";

const CartModal: FC<CartModalProps> = ({ children, updateToCart, removeToCart, cardProducts, openCart, onActionCart }) => {
  const itemsState = cardProducts;
  const [isOpen, setIsOpen] = useState(openCart);
  const onCloseCart = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    console.log('library',openCart);
    setIsOpen(openCart);
  }, [openCart]);

  return (
    <TorresModalContent isOpen={isOpen} onClose={onCloseCart} position="right">
      {itemsState && itemsState.length <= 0 && (
        <>
          <div className="empty-cart__container__header">
            <TorresButtonIcon action={() => onCloseCart()} icon={ICONS_NAMES.CLOSE} />
          </div>
          {children}{/* This is the children for empty cart */} 
        </>
      )}
      {itemsState && itemsState.length > 0 && (
        <TorresSummaryCart
          items={itemsState}
          updateItem={updateToCart}
          removeItem={removeToCart}
          onAction={onActionCart}
          closeModal={onCloseCart}
        />
      )}
    </TorresModalContent>
  );
};

export default CartModal;
