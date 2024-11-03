import { FC } from "react";
import { IButtonChip } from"../../../../types/models";
import * as iconsTorres from "components/atoms/Icons";

import "./style.scss";
import clsx from "clsx";

const TorresButtonChip: FC<IButtonChip> = ({
  text,
  action,
  isDisabled,
  iconBefore,
  iconAfter,
  isSelected,
}) => {
  const IconBefore =
    iconBefore && iconsTorres[iconBefore as keyof typeof iconsTorres];
  const IconAfter =
    iconAfter && iconsTorres[iconAfter as keyof typeof iconsTorres];

  const className = clsx("torres-button-chip", {
    "torres-button-chip--selected": isSelected,
  });

  return (
    <button
      type="button"
      onClick={action}
      className={className}
      disabled={isDisabled}
    >
      {IconBefore && <IconBefore variant={"secondary"} />}
      {text}
      {IconAfter && <IconAfter variant={"secondary"} />}
    </button>
  );
};

export default TorresButtonChip;
