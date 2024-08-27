import { IIcon } from "types/models";
import "./style.scss";

const ArrowWithTailRightIcon: React.FC<IIcon> = ({ size, variant='primary' }) => {
  const classNames = [
    "arrow-with-tail-right-icon",
    size ? `arrow-with-tail-right-icon--${size}` : "",
    variant ? `arrow-with-tail-right-icon--${variant}` : ""
  ].filter(Boolean).join(' ');

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={classNames}
    >
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

export default ArrowWithTailRightIcon;
