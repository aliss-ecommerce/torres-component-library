import { IIcon } from"../../../../types/models";
import "./style.scss";
import clsx from "clsx";

const CloseIcon: React.FC<IIcon> = ({ size, variant = "primary" }) => {
  const iconClass = clsx("close-icon", {
    [`close-icon--${variant}`]: variant,
    [`close-icon--${size}`]: size,
  });

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
    >
      <path
        d="M18 6L6 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
