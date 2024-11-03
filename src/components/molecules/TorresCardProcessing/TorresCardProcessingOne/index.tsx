import { TorresCirclePercentage } from "src/components/atoms";
import TorresHeaderCardProcessing from "../TorresHeaderCardProcessing";
import "./style.scss";
import { FC } from "react";

interface CardProcessingOneProps {
  title: string;
  body: {
    title: string;
    description: string;
    percentage: number;
  };
  status: {
    label: string;
    value: string;
  };
  urlRedirection: string;
  percentage: number;
}

const CardProcessingOne: FC<CardProcessingOneProps> = ({
  title,
  body,
  status,
  urlRedirection,
}) => {
  const nameListError = ["error", "rejected"];
  return (
    <div className="cardProcessingOne">
      <TorresHeaderCardProcessing
        urlRedirection={urlRedirection} 
        title={title} 
        status={status} 
      />
      <div className="cardProcessingOne__body">
        <div className="cardProcessingOne__body__circle-container">
          <TorresCirclePercentage
            error={nameListError.includes(status.value)}
            value={body.percentage}
          />
        </div>
        <div className="cardProcessingOne__body__description">
          <h3 className="cardProcessingOne__body__description-title">
            {body.title}
          </h3>
          <p className="cardProcessingOne__body__description-description">
            {body.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProcessingOne;
