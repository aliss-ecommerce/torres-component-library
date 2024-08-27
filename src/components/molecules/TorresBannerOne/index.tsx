import { TorresImage, TorresLink } from "src/components/atoms";
import TorresSubtitle from "src/components/atoms/TorresSubtitle";
import { IBannerHome } from "src/types/models";

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