import { TorresImage, TorresLink, TorresSubtitle } from "src/components/atoms";
import { IBannerHome } from "../../../types/models";

import "./style.scss";

const TorresBannerOne: React.FC<IBannerHome> = ({ image, title, toRedirect }) => {
  return (
    <div className="torres-banner-one">
      <TorresImage {...image} />
      <div className="torres-banner-one__content">
        <TorresSubtitle text={title} />
        <TorresLink {...toRedirect} variant="secondary" />
      </div>
    </div>
  );
};

export default TorresBannerOne;