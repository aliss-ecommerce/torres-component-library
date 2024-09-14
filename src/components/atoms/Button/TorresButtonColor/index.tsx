import clsx from "clsx";
import { FC } from "react";
import { IButtonColor } from "src/types/models";

import "./style.scss";

const TorresButtonColor: FC<IButtonColor> = ({
  id,
  color,
  name,
  action,
  isSelected = false,
}) => {
  const buttonColorClass = clsx("torres-button-color", {
    "torres-button-color--selected": isSelected,
  });
  return (
    <button
      id={String(id)}
      onClick={action}
      name={name}
      className={buttonColorClass}
    >
      <span style={{ backgroundColor: color }}></span>
    </button>
  );
};

export default TorresButtonColor;
