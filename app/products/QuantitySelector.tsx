import React from 'react';
import Product from '../types/Product';

interface QuantitySelectorProps {
  cartProduct: Product,
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ cartProduct, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-gray-400 text-gray-600 px-3 py-1 rounded hover:bg-gray-200"
        onClick={onDecrease}
        disabled={cartProduct.quantity === 1}
      >
        -
      </button>
      <span className="text-base">{cartProduct.quantity}</span>
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