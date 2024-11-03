import React, { useEffect, useState } from 'react';
import './style.scss';

interface QuantityProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
  variant?: string;
  size?: string;
}

const TorresQuantity: React.FC<QuantityProps> = ({ initialQuantity, onQuantityChange, variant, size }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className={`torres--quantity torres--quantity--${variant} torres--quantity--${size}`} >
      <button className="torres--quantity__button" onClick={handleDecrease} disabled={quantity <= 1}>
        -
      </button>
      <span className="torres--quantity__value">{quantity}</span>
      <button className="torres--quantity__button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default TorresQuantity;