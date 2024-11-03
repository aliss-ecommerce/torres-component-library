import React, { FC } from 'react';

import './style.scss';

interface TorresCardDataProps {
  label?: string;
  data: {
    title: string;
    value: string | string[];
  }[];
  activeBorder?: boolean;
  action?: {
    onClick: () => void;
    iconAction: React.ReactNode;
  };
}

const TorresCardData: FC<TorresCardDataProps> = ({
  data,
  label,
  action,
  activeBorder = true,
}) => {
  return (
    <div className="card-data-container">
      <div className={`card-data-container__header card-data-container__header${label ? '--between':'--right'}`}>
        {label && <label className="card-data-container__label">{label}</label>}
        {action && (<button className="card-data-button-action" onClick={action.onClick}>{action.iconAction}</button>)}
      </div>
      <div className={`card-data ${activeBorder ? 'active-border' : ''}`}>
        {data.map(item => (
          <div key={item.title} className="card-data__item">
            <div className="card-data__item__title">{item.title}</div>
            {Array.isArray(item.value) ? (
              <ol className="card-data__item__value-list">
                {item.value.map(value => (
                  <li key={value}>{value}</li>
                ))}
              </ol>
            ) : (
              <div className="card-data__item__value">{item.value}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TorresCardData;
