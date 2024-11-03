import { default as React } from 'react';
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
declare const TorresCirclePercentage: React.FC<TorresCirclePercentageProps>;
export default TorresCirclePercentage;
