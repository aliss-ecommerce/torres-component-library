import clsx from "clsx";
import "./style.scss";

const TorresSubtitle: React.FC<{
  text: string;
  size?: string;
  align?: string;
}> = ({ text, size = "large", align = "left" }) => {
  const className = clsx("torres-subtitle", {
    [`torres-subtitle--${size}`]: size,
    [`torres-subtitle--${align}`]: align,
  });
  return <h3 className={className}>{text}</h3>;
};

export default TorresSubtitle;
