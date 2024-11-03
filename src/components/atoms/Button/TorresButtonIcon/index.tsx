import { FC } from "react";
import { IButtonIcon } from"../../../../types/models";
import * as iconsTorres from "components/atoms/Icons";

import "./style.scss";
import clsx from "clsx";
import { BUTTON_VARIANTS } from "../../../../types/constants";

const TorresButtonIcon: FC<IButtonIcon> = ({
  icon,
  action,
  isDisabled,
  variant = BUTTON_VARIANTS.PRIMARY,
}) => {
  const TorresIcon = icon && iconsTorres[icon as keyof typeof iconsTorres];

  const className = clsx("torres-button-icon", {
    [`torres-button-icon--${variant}`]: variant,
    [`torres-button-icon--disabled`]: isDisabled,
  });

  return (
    <button
      type="button"
      onClick={action}
      className={className}
      disabled={isDisabled}
    >
      {TorresIcon && <TorresIcon variant={"primary"} />}
    </button>
  );
};

export default TorresButtonIcon;
