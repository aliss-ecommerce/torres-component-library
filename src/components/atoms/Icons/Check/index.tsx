import { FC } from "react";

import "./style.scss";
import { IIcon } from "src/types";

const CheckIcon: FC<IIcon> = ({ variant, size="default"}) => {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      className={`icon-check icon-check--${variant} icon-check--${size}`}
    >
      <path
        d="M13.1362 24.6999C12.9037 24.71 12.6745 24.6417 12.4855 24.506L6.26853 19.3691C5.86799 19.0145 5.80769 18.4114 6.13007 17.9845C6.48408 17.5858 7.08249 17.5199 7.51469 17.8322L13.0531 22.346L27.5916 8.90139C28.0216 8.57859 28.6268 8.63733 28.9866 9.03677C29.3465 9.43621 29.342 10.0443 28.9762 10.4383L13.8424 24.4229C13.6496 24.5998 13.3979 24.6985 13.1362 24.6999Z"
      />
    </svg>
  );
};

export default CheckIcon;
