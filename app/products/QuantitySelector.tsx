import React from 'react';
import Product from '../types/Product';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-gray-400 text-gray-600 px-3 py-1 rounded hover:bg-gray-200"
        onClick={onDecrease}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="text-base text-white">{quantity}</span>
      <button
        className="bg-gray-400 text-gray-600 px-3 py-1 rounded hover:bg-gray-200"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;