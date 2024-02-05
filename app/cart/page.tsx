"use client"
import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import ProductCard from '../components/ProductCard';

const Cart: React.FC = () => {
  const { CartProducts, handleClearCart } = useCart();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl text-center font-semibold mb-6">Shopping Cart</h2>
      
      {!CartProducts || CartProducts.length == 0 ? (
        <div className="flex flex-col items-center">
          <p>Your cart is empty.</p>
          <Link href={"/products"} className='text-slate-600 flex items-center gap-1 mt-2'>
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <div>
          <div className='grid grid-cols-5 text-xs gap-4 pb-2 items-center'>
        <div className='col-span-2 justify-self-start'>PRODUCT</div>
        <div className='justify-self-center'>PRICE</div>
        <div className='justify-self-center'>QUANTITY</div>
        <div className='justify-self-end'>TOTAL</div>
      </div>
          {CartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className='mt-4 flex justify-between'>
            <div className=''>
              <button onClick={() => { handleClearCart() }} className="bg-transparent border border-gray-500 text-gray-500 py-2 px-4 rounded transition duration-300 hover:bg-gray-500 hover:text-white">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button className='border border-gray-500 text-white py-2 px-4 rounded transition duration-300 w-1/4 hover:bg-gray-500 hover:text-white font-bold'>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
