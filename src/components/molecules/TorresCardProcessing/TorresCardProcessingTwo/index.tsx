import { FC } from 'react';

import './style.scss';
import TorresHeaderCardProcessing from '../TorresHeaderCardProcessing';
import TorresProgressJourney from '../../TorresProgressJourney';

interface TorresCardProcessingTwoProps {
  header: {
    title: string;
    urlRedirection: string;
    status: {
      label: string;
      value: string;
    };
  };
  configSteps: {
    id: string;
    icon: string;
    currentStep: boolean;
    nextStepId: string | null;
    prevStepId: string | null;
    description: {
      title: string;
      description: string;
      descriptionSuccess: string;
      startDate: string;
    };
  }[];
  deliveryDate: string;
  error?: {
    title?: string;
    label: string;
  };
}

const TorresCardProcessingTwo: FC<TorresCardProcessingTwoProps> = ({
  header,
  configSteps,
  deliveryDate,
  error,
}) => {
  const body = configSteps.find(step => step.currentStep)?.description;
  return (
    <div className="cardProcessingTwo">
      <TorresHeaderCardProcessing {...header} modelType="modelTwo" />
      <div className="cardProcessingTwo__body">
        <div className="cardProcessingTwo__body__description">
          <h3 className="cardProcessingTwo__body__description-title">
            {!error ? body?.title : error.title}
          </h3>
          <p className="cardProcessingTwo__body__description-description">
            {!error ? body?.description : error.label}
          </p>
        </div>
        <div className="cardProcessingTwo__body__progress-container">
          <TorresProgressJourney
            steps={configSteps}
            compressed={true}
            error={error}
          />
        </div>
        <div className="cardProcessingTwo__body__container__footer">
          <div className="cardProcessingTwo__body__delivery-date">
            <span className="cardProcessingTwo__body__delivery-date__label">
              Fecha de entrega:
            </span>
            <span className="cardProcessingTwo__body__delivery-date__date">
              {deliveryDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorresCardProcessingTwo;
