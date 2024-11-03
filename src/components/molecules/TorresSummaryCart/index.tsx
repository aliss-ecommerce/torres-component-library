import { FC, useEffect, useState } from "react";
import { TorresButtonIcon, TorresPrice } from "src/components/atoms";
import {
  BUTTON_VARIANTS,
  ICONS_NAMES,
  ItemCart,
  SummaryCartProps,
} from "../../../types";
import { TorresButton } from "components/atoms";

import "./style.scss";
import { TorresItemCart } from "src/components/molecules";

const TorresSummaryCart: FC<SummaryCartProps> = ({
  items,
  closeModal,
  removeItem,
  updateItem,
  onAction,
}) => {
  const [itemsCart, setItemsCart] = useState<ItemCart[]>(items);
  useEffect(() => {
    setItemsCart(items);
  }, [items]);
  return (
    <>
      <div className="summary-cart">
        <div className="summary-cart__container">
          <div className="summary-cart__container__header">
            <h2 className="summary-cart__container__header__title">
              Tus pedidos ({itemsCart.length})
            </h2>
            <TorresButtonIcon
              action={() => closeModal()}
              icon={ICONS_NAMES.CLOSE}
            />
          </div>

          <div className="summary-cart__items">
            {itemsCart.map((item: ItemCart, index) => (
              <TorresItemCart
                key={index}
                itemSummary={item}
                removeItem={removeItem}
                updateItem={updateItem}
              />
            ))}
          </div>
          <div className="summary-cart__container-subAmount">
            <div className="summary-cart__container-subAmount__subtotal">
              <p>Subtotal:</p>
              <TorresPrice
                value={items.reduce(
                  (acc, item) => acc + item.quantity * item.priceList,
                  0
                )}
              />
            </div>
            <div className="summary-cart__container__button-submit">
              <TorresButton
                isWidthAll={true}
                variant={BUTTON_VARIANTS.PRIMARY}
                action={() => {
                  onAction();
                  closeModal();
                }}
                text="Continuar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`padding-mobile-summary-cart`}></div>
    </>
  );
};

export default TorresSummaryCart;
