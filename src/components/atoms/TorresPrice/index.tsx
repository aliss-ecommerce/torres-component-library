import clsx from "clsx";
import { IPrice } from "src/types/models";
import { currencyFormatter } from "src/utils/currency";

import "./style.scss";
import { CURRENCY_SYMBOLS } from "src/types/constants";

const TorresPrice: React.FC<IPrice> = ({ value, currency=CURRENCY_SYMBOLS.PEN, through=false }) => {
  const torresPriceValueClass = clsx('torres-price__value', {
    'torres-price__value--through': through,
  });
  return (
    <div className="torres-price">
      <span className={torresPriceValueClass}>{currencyFormatter(value, currency)}</span>
    </div>
  );
}

export default TorresPrice;