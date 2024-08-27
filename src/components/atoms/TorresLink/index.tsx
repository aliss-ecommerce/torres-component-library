import { Link } from "react-router-dom";
import { ILink } from "types/models";
import * as iconsTorres from "components/atoms/Icons";

import "./style.scss";
import { ICONS_NAMES } from "src/types/constants";

const TorresLink: React.FC<ILink> = ({
  href,
  text,
  inApp = true,
  isDisabled = false,
  variant = "primary",
  iconAfter= ICONS_NAMES.EMPTY,
}) => {
  const IconAfter = iconAfter && iconsTorres[iconAfter as keyof typeof iconsTorres];
  if (isDisabled) {
    return <span className="torres-link torres-link--disabled">{text}</span>;
  }
  return (
    <Link
      to={href}
      target={inApp ? "_self" : "_blank"}
      className={`torres-link torres-link--${variant}`}
    >
      {text}
      {IconAfter && variant === 'secondary' && <IconAfter />}
    </Link>
  );
};

export default TorresLink;
