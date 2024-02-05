"use client"
import React, { useState } from 'react';
import Product from '../types/Product';
import QuantitySelector from '../products/QuantitySelector';
import { useCart } from '../hooks/useCart';

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const {handleRemoveProductFromCart} = useCart();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
    // Implement logic to update the quantity in your cart state or backend
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // Implement logic to update the quantity in your cart state or backend
    }
  }
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-1[1.5px] border-slate-200 py-4 items-center">
      <div className='col-span-2 justify-self-start flex gap-2 md:gap-4'>
        <div className="flex gap-5">
          <div className="max-w-[100px] max-h-[100px] object-cover rounded overflow-hidden ">
          <img src={product.thumbnail} className=''/>
          </div>
          <div className='flex flex-col gap-2'>
          <span className="text-lg font-semibold">{product.title}</span>
            <button onClick={()=>{handleRemoveProductFromCart(product)}} className="bg-red-500 hover:bg-red-800 text-white py-1 px-2 max-w-[80px] rounded transition duration-300 ease-in-out">
              Remove
            </button>
        </div>
        </div>
      </div>
      <div className='justify-self-center'>{product.price.toFixed(2)}</div>
      <div className='justify-self-center'>
        <QuantitySelector 
        cartProduct={product} 
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        />
      </div>
      <div className='justify-self-end font-semibold'>{`$${(product.price * quantity).toFixed(2)}`}</div>
    </div >
  );
};

export default CartItem;
