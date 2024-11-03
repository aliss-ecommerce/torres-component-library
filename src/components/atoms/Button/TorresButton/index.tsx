import React from "react";
import clsx from "clsx";
import { IButton } from "../../../../types/models";
import * as iconsTorres from "components/atoms/Icons";
import { BUTTON_TYPES, BUTTON_VARIANTS } from "types/constants";

import "./style.scss";

const TorresButton: React.FC<IButton> = ({
  text,
  iconAfter,
  iconBefore,
  action,
  type = BUTTON_TYPES.BUTTON,
  variant = BUTTON_VARIANTS.PRIMARY,
  isDisabled = false,
  isWidthAll = false,
  isWidthAllMobile = false,
}) => {
  const IconBefore =
    iconBefore && iconsTorres[iconBefore as keyof typeof iconsTorres];
  const IconAfter =
    iconAfter && iconsTorres[iconAfter as keyof typeof iconsTorres];

  const classNames = clsx(`torres-button`, {
    [`torres-button--${variant}`]: Boolean(variant),
    [`torres-button--width-all`]: isWidthAll,
    [`torres-button--width-all-mobile`]: isWidthAllMobile,
  });

  const variantIcons =
    variant === BUTTON_VARIANTS.PRIMARY ? "secondary" : "primary";

  return (
    <button
      type={type}
      onClick={action}
      className={classNames}
      disabled={isDisabled}
    >
      {IconBefore && <IconBefore variant={variantIcons} />}
      {text}
      {IconAfter && <IconAfter variant={variantIcons} />}
    </button>
  );
};

export default TorresButton;
