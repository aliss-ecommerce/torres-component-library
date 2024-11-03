import { FC } from "react";
import { IIcon } from "../../../../types/models";

import "./style.scss";

const TrashIcon: FC<IIcon> = ({ variant, size }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      className={`trash-icon trash-icon--${variant} trash-icon--${size}`}
    >
      <path
        d="M18.79 7.5C18.3537 7.5 18 7.85369 18 8.29V17.13C18 18.9912 16.4912 20.5 14.63 20.5H8.95C7.0888 20.5 5.58 18.9912 5.58 17.13V8.29C5.58 7.85369 5.22631 7.5 4.79 7.5C4.3537 7.5 4 7.85369 4 8.29V17.13C4.02742 19.8719 6.25799 22.0801 9 22.08H14.68C17.4025 22.0529 19.6029 19.8525 19.63 17.13V8.29C19.6304 8.07152 19.5404 7.86262 19.3812 7.71294C19.2221 7.56326 19.008 7.48617 18.79 7.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.79 6.08H4.79C4.3537 6.08 4 5.72631 4 5.29C4 4.85369 4.3537 4.5 4.79 4.5H7.44L8.62 3.22C9.07107 2.76141 9.68675 2.50218 10.33 2.5H13.25C13.8839 2.49999 14.4918 2.75179 14.94 3.2L16.14 4.5H18.79C19.2263 4.5 19.58 4.85369 19.58 5.29C19.58 5.72631 19.2263 6.08 18.79 6.08ZM13.25 4.08H10.33C10.1301 4.08007 9.93744 4.15499 9.79 4.29L9.6 4.49H13.98L13.79 4.29C13.6436 4.15326 13.4503 4.07807 13.25 4.08Z"
      />
      <path
        d="M8.04 9.29V12.29C8.04 12.7042 8.37579 13.04 8.79 13.04C9.20421 13.04 9.54 12.7042 9.54 12.29V9.29C9.54 8.87579 9.20421 8.54 8.79 8.54C8.37579 8.54 8.04 8.87579 8.04 9.29Z"
      />
      <path
        d="M11.04 9.29V17.29C11.04 17.7042 11.3758 18.04 11.79 18.04C12.2042 18.04 12.54 17.7042 12.54 17.29V9.29C12.54 8.87579 12.2042 8.54 11.79 8.54C11.3758 8.54 11.04 8.87579 11.04 9.29Z"
      />
      <path
        d="M14.04 9.29V12.29C14.04 12.7042 14.3758 13.04 14.79 13.04C15.2042 13.04 15.54 12.7042 15.54 12.29V9.29C15.54 8.87579 15.2042 8.54 14.79 8.54C14.3758 8.54 14.04 8.87579 14.04 9.29Z"
      />
    </svg>
  );
};

export default TrashIcon;