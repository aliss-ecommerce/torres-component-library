import clsx from "clsx";
import "./style.scss";

const TorresParagraph: React.FC<{
  text: string;
  size?: string;
  align?: string;
}> = ({ text, size = "large", align = "left" }) => {
  const className = clsx("torres-paragraph", {
    [`torres-paragraph--${size}`]: size,
    [`torres-paragraph--${align}`]: align,
  });
  return <p className={className}>{text}</p>;
};

export default TorresParagraph;
