import { TorresImage, TorresPrice, TorresTag } from "components/atoms";
import { ICardProduct } from "src/types/models";

import "./style.scss";

const TorresCardProduct: React.FC<ICardProduct> = ({
  image,
  price,
  name,
  priceList,
  action,
}) => {
  const discountPercentage = ((price - priceList) / price) * 100;
  return (
    <div className="torres-card-product" onClick={action}>
      <div className="torres-card-product__container-tag">
        {priceList !== price && (
          <TorresTag text={`-${discountPercentage.toFixed(0)}%`} />
        )}
      </div>
      <TorresImage
        url={image.url}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
      />
      <div className="torres-card-product__container-name">
        <span className="torres-card-product__name">{name}</span>
      </div>
      <div className="torres-card-product__container-prices">
        <TorresPrice value={priceList} />
        {priceList !== price && <TorresPrice value={price} through />}
      </div>
    </div>
  );
};

export default TorresCardProduct;
