import { ArrowWithTailLeft } from "components/atoms/Icons";

import "./style.scss";
import { FC } from "react";
import { TorresTagStatus } from "src/components/atoms";

interface TorresHeaderCardProcessingProps {
  title: string;
  status: {
    label: string;
    value: string;
  };
  urlRedirection: string;
  modelType?: string;
}

const TorresHeaderCardProcessing: FC<TorresHeaderCardProcessingProps> = ({
  title, 
  status, 
  urlRedirection,
  modelType= "modelOne"
}) => {
  return (
    <div className={`headerCardProcessing headerCardProcessing__header headerCardProcessing__header__${modelType}`}>
      <div className="headerCardProcessing__header__container-title-tag">
        <h2 className="headerCardProcessing__header__title">{title}</h2>
        <TorresTagStatus status={status.value} label={status.label} />
      </div>
      <a href={urlRedirection} className="headerCardProcessing__header__link">
        <span>Ver más</span> <ArrowWithTailLeft />
      </a>
    </div>
  );
};

export default TorresHeaderCardProcessing;
