import { FC } from "react";
import "./style.scss";

interface TorresTagStatusProps {
  status: string;
  label: string;
}

const TorresTagStatus: FC<TorresTagStatusProps> = ({ status, label }) => {
  return (
    <span className={`tag-torres tag-torres--${status}`}>{label}</span>
  );
};

export default TorresTagStatus;
