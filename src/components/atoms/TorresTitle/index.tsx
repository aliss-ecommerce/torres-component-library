import clsx from "clsx";
import "./style.scss";

const TorresSubtitle: React.FC<{
  text: string;
  size?: string;
  align?: string;
}> = ({ text, size = "large", align = "left" }) => {
  const className = clsx("torres-title", {
    [`torres-title--${size}`]: size,
    [`torres-title--${align}`]: align,
  });
  return <h1 className={className}>{text}</h1>;
};

export default TorresSubtitle;
