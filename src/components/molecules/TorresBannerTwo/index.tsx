import { TorresImage, TorresLink } from "src/components/atoms";
import TorresSubtitle from "src/components/atoms/TorresSubtitle";
import { IBannerHome } from "../../../types/models";

import "./style.scss";

const TorresBannerTwo: React.FC<IBannerHome> = ({ image, title, toRedirect }) => {
  return (
    <div className="torres-banner-two">
      <TorresImage {...image} />
      <div className="torres-banner-two__content">
        <TorresSubtitle text={title} />
        <TorresLink {...toRedirect} variant="secondary" />
      </div>
    </div>
  );
};

export default TorresBannerTwo;