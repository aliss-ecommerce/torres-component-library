import React, { useEffect } from "react";
import "./style.scss";

interface TorresCirclePercentageProps {
  /**
   * The current value to be represented by the circle progress.
   */
  value: number;
  /**
   * The size of the circle progress component in pixel. Optional.
   */
  size?: number;
  /**
   * The stroke width of the progress arc. Optional.
   */
  strokeWidth?: number;
  /**
   * Indicates whether the circle progress should represent an error state. Optional.
   */
  error?: boolean;
  /**
   * The maximum value that `value` can represent, used to calculate the percentage of the circle that should be filled. Optional.
   */
  valueMaximum?: number;
}

/**
 * Renders a circular progress bar based on the provided props.
 * 
 * @param {TorresCirclePercentageProps} props The properties to configure the circle progress.
 * @returns A React functional component that displays a circular progress indicator.
 */
const TorresCirclePercentage: React.FC<TorresCirclePercentageProps> = ({
  value,
  size = 72, // in pixels
  error = false,
  valueMaximum = 100,
}) => {
  let percentage = 0;
  const fontZisePercentage = (16.62 / 72) * size;
  const strokeWidthPercentage = (6 / 72) * size;
  const radius = (size - strokeWidthPercentage) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedPercentage = (value / valueMaximum) * 100;

  percentage = normalizedPercentage > 100 ? 100 : normalizedPercentage;
  percentage = error ? 90 : percentage;

  const isPercentageFull = percentage === 100;
  const dashoffset = circumference * ((100 - percentage) / 100);

  useEffect(() => {
    if(value > valueMaximum){
      console.error("The value is greater than the maximum value allowed");
    }
  },[value, valueMaximum]);

  return (
    <svg
        className={`circle-percentage 
          circle-percentage--${error ? "error" : "success "}
          circle-percentage--${isPercentageFull ? "full" : "not-full"}
        `}
        width={size}
        height={size}
      >
        <circle
          className="circle-percentage__background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidthPercentage}
        />
        <circle
          className="circle-percentage__bar"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidthPercentage}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: dashoffset,
          }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="circle-percentage__text"
          fontSize={`${fontZisePercentage}px`}
        >
          {percentage % 1 === 0 ? percentage : percentage.toFixed(1)}%
        </text>
        <svg
          x={`20%`}
          y={`20%`}
          width={size}
          height={size}
          viewBox={`0 0 55 55`}
          fill="none"
          className="circle-percentage__icon-check"
        >
          <path
            d="M13.1362 24.6999C12.9037 24.71 12.6745 24.6417 12.4855 24.506L6.26853 19.3691C5.86799 19.0145 5.80769 18.4114 6.13007 17.9845C6.48408 17.5858 7.08249 17.5199 7.51469 17.8322L13.0531 22.346L27.5916 8.90139C28.0216 8.57859 28.6268 8.63733 28.9866 9.03677C29.3465 9.43621 29.342 10.0443 28.9762 10.4383L13.8424 24.4229C13.6496 24.5998 13.3979 24.6985 13.1362 24.6999Z"
            fill="#47DCA6"
          />
        </svg>
        <svg
          x={`-15%`}
          y={`-15%`}
          width={size}
          height={size}
          viewBox={`0 0 55 55`}
          fill="none"
          className="circle-percentage__icon-error"
        >
          <path
            d="M37.6151 36.0117L48.132 25.5304C48.5714 25.0869 48.5714 24.3684 48.132 23.9249C47.7004 23.4735 46.9876 23.4599 46.5394 23.8946L36.0225 34.3759L25.6408 23.8946C25.428 23.6677 25.1318 23.5391 24.822 23.5391C24.5122 23.5391 24.2161 23.6677 24.0032 23.8946C23.6136 24.3231 23.6136 24.9808 24.0032 25.4093L34.3849 35.8754L23.868 46.3416C23.4286 46.7851 23.4286 47.5036 23.868 47.9471C24.0772 48.1631 24.3649 48.2835 24.6643 48.2803C24.9695 48.3053 25.272 48.2072 25.5056 48.0077L36.0225 37.5264L46.5394 48.1289C46.7486 48.3449 47.0363 48.4652 47.3357 48.4621C47.6348 48.4635 47.9218 48.3434 48.132 48.1289C48.5714 47.6853 48.5714 46.9669 48.132 46.5233L37.6151 36.0117Z"
            fill="#FC4E55"
          />
        </svg>
      </svg>
  );
};

export default TorresCirclePercentage;
