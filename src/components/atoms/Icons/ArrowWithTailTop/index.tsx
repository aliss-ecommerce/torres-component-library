import { IIcon } from"../../../../types/models";
import "./style.scss";
import clsx from "clsx";

const ArrowWithTailTopIcon: React.FC<IIcon> = ({
  size,
  variant = "primary",
}) => {
  const iconClass = clsx("arrow-with-tail-top-icon", {
    [`arrow-with-tail-top-icon--${variant}`]: variant,
    [`arrow-with-tail-top-icon--${size}`]: size,
  });

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={iconClass}>
      <path
        d="M5 12H19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowWithTailTopIcon;
