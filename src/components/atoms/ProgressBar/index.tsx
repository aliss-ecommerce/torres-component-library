import React from 'react';
import './style.scss';

interface ProgressBarProps {
  value: number;
  total?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, total = 100 }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-container__value">0{value}</div>
      <div className="progress-bar-container__progress-bar">
        <div className="progress-bar-container__progress-bar__progress" style={{ width: `${(value / total) * 100}%` }}></div>
      </div>
      <div className={`progress-bar-container__total progress-bar-container__total--${value === total && 'completed'}`}>0{total}</div>
    </div>
  );
};

export default ProgressBar;