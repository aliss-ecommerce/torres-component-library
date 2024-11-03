import * as IconsTorres from "components/atoms/Icons";

import "./style.scss";
import { FC } from "react";
import { TorresBadge, TorresLinkNext } from "src/components/atoms";

interface TorresProgressStepProps {
  icon: string;
  isCompleted?: boolean;
  isCurrentStep: boolean;
  isCompressed?: boolean;
  isFirts?: boolean;
  isLast?: boolean;
  error?: string;
  description: {
    title: string;
    description: string;
    descriptionSuccess: string;
    startDate: string;
  };
}

const TorresProgressStep
: FC<TorresProgressStepProps> = ({
  icon,
  description,
  isCompressed = false,
  isCompleted = false,
  isFirts = false,
  isCurrentStep = false,
  isLast = false,
  error,
}) => {
  const IconTorres = IconsTorres[icon as keyof typeof IconsTorres];
  const IconCheck = IconsTorres.Check;
  const IconError = IconsTorres.Error;
  return (
    <div className={`step step--${isCompressed ? "compressed" : "expanded"}`}>
      <div
        className={`step__container-journey step__container-journey--${
          isFirts && "firts"
        }`}
      >
        <div className="step__container__badge__and_step-line">
          {!isFirts && !isLast && (
            <div
              className={`step__container-journey__step-line 122 step__container-journey__step-line--${
                (isCurrentStep || isCompleted) &&
                (isCompressed || !isCurrentStep) &&
                "completed"
              }`}
            ></div>
          )}
          {isFirts && !isCompressed && (
            <div
              className={`step__container-journey__step-line 133 step__container-journey__step-line--${
                isCompleted && "completed"
              }`}
            ></div>
          )}
          {isLast && isCompressed && (
            <div
              className={`step__container-journey__step-line q144 step__container-journey__step-line--${
                (isCurrentStep || isCompleted) && "completed"
              }`}
            ></div>
          )}
          {!isCompleted && (!isLast || !error) && (
            <TorresBadge
              size={!isCompressed ? "small" : "medium"}
              variant={isCurrentStep ? "current" : "disabled"}
            >
              {IconTorres && (
                <IconTorres
                  size={"small"}
                  variant={isCurrentStep ? "current" : "disabled"}
                />
              )}
            </TorresBadge>
          )}
          {isCompleted && !error && (
            <TorresBadge
              size={!isCompressed ? "small" : "medium"}
              variant={"completed"}
            >
              <IconCheck variant={"secondary"} />
            </TorresBadge>
          )}
          {error && isLast && (
            <TorresBadge size={!isCompressed ? "small" : "medium"} variant={"error"}>
              <IconError variant={"secondary"} />
            </TorresBadge>
          )}
        </div>
        <div className="step__description">
          {isFirts || !error || isLast ? (
            <h3 className="step__description__title">{description.title}</h3>
          ) : (
            "-"
          )}
          <div className="step__description__body">
            {((isCurrentStep && !error && !isLast) || (error && isFirts) )&& (
              <p className="step__description__body__resumen">
                {description.description}
              </p>
            )}
            {isCompleted  && (
              <p className="step__description__body__resumen">
                {description.descriptionSuccess}
              </p>
            )}
            {error && isLast && (
              <p className="step__description__body__resumen">
                {error}, comunícate con nosotros a nuestro canal
                de soporte vía <TorresLinkNext href="#" text="WhatsApp" />.
              </p>
            )}
            {((!error && (isCompleted || isCurrentStep))  || isFirts || ( error && isLast)) &&(
              <p className="step__description__body__start-date">
                {description.startDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorresProgressStep;
;
