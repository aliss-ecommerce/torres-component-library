import { ITag } from "src/types/models";

import "./style.scss";

const TorresTag: React.FC<ITag> = ({ text }) => {
  return <span className="torres-tag">{text}</span>;
};

export default TorresTag;