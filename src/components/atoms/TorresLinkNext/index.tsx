import { IlinkNext } from"../../../types/models";
import * as iconsTorres from "components/atoms/Icons";

import "./style.scss";
import { ICONS_NAMES } from "../../../types/constants";
import clsx from "clsx";

const TorresLinkNext: React.FC<IlinkNext> = ({
  isDisabled = false,
  text,
  variant = "primary",
  iconAfter = ICONS_NAMES.EMPTY,
  action,
  isActionDisabled = false,
  cursorPointerInDisabled = false,
}) => {
  const IconAfter =
    iconAfter && iconsTorres[iconAfter as keyof typeof iconsTorres];
  if (isDisabled) {
    return (
      <span
        onClick={isActionDisabled ? action : undefined}
        className={clsx("torres-link-next--disabled", {
          "torres-link-next--disabled--pointer": cursorPointerInDisabled,
        })}
      >
        {text}
      </span>
    );
  }
  return (
    <button
      onClick={action}
      className={`torres-link-next torres-link-next--${variant}`}
    >
      {text}
      {IconAfter && variant === "secondary" && <IconAfter />}
    </button>
  );
};

export default TorresLinkNext;
