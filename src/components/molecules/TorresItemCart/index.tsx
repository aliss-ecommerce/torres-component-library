import { FC, useEffect, useState } from "react";
import {
  TorresButtonIcon,
  TorresPrice,
  TorresQuantity,
} from "components/atoms";

import "./style.scss";
import { ICONS_NAMES, ItemCart } from "../../../types";

interface TorresItemCartProps {
  itemSummary: ItemCart;
  removeItem: (id: string) => void;
  updateItem: (product: ItemCart) => void;
}
const TorresItemCart: FC<TorresItemCartProps> = ({
  itemSummary,
  removeItem,
  updateItem,
}) => {
  const [quantity, setQuantity] = useState<number>(itemSummary.quantity);
  const [item, setItem] = useState(itemSummary);

  const ChangeHandler = (quantity: number) => {
    setQuantity(quantity);
    updateItem({ ...item, quantity });
  };

  useEffect(() => {
    setItem(itemSummary);
  }, [itemSummary]);

  useEffect(() => {
    setQuantity(itemSummary.quantity);
  }, [itemSummary.quantity]);

  return (
    <div key={item.title} className="item-cart">
      <div className="item-cart__container">
        <div className="item-cart__container__image">
          <img src={item.urlImage} alt={item.title} />
        </div>
        <div className="item-cart__container__description">
          <div className="item-cart__container__description__title-quantity">
            <h3>{item.title}</h3>
            <span>
              <TorresButtonIcon
                icon={ICONS_NAMES.TRASH}
                action={() => removeItem(item.skuId)}
              />
            </span>
          </div>
          <div className="item-cart__count-prices">
            <TorresQuantity
              initialQuantity={quantity}
              onQuantityChange={ChangeHandler}
            />
            <div className="item-cart__count-prices__prices">
              <TorresPrice value={item.priceList} />
              {item.priceList !== item.price ? (
                <p className="item-cart__count-prices__prices__priceOld">
                  <TorresPrice value={item.price} through={true} />
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorresItemCart;
