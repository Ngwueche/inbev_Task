import React, { useEffect, useState } from 'react';
import Product from '../types/Product';
import { useCart } from '../hooks/useCart';
interface ProductCardProps {
    product: Product;
    onAddToCart: any
  }



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const {handleAddProductToCart , CartProducts} = useCart();
    const [isInCart, setIsInCart] = useState(false);


    console.log(CartProducts);

    useEffect(()=>{
      setIsInCart(false);

      if(CartProducts){
        const isExistingIndex  = CartProducts.findIndex(
          (item) => item.id == product.id
        );
        if(isExistingIndex > -1){
          setIsInCart(true);
        }
      }
    }, [CartProducts]);
    
  return (
<div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] flex flex-col">
    <div className=" w-full flex-1 max-h-[50%] overflow-hidden">
        <img className="pb-4 bg-cover rounded-t-lg w-full h-full object-cover " src={product.thumbnail} alt="product image" />
    </div>
    <div className="px-5 pb-5 flex-1 flex flex-col">
        <div className="flex-1 ">
            <h5 className="text-lg mb-4 font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
            <h6 className="text-[12px] font-semibold tracking-tight text-gray-900 dark:text-white">{product.description}</h6>
        </div>
        <div className="flex items-center mt-1 mb-5">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
            <button
          onClick={() => handleAddProductToCart(product)}
          className="bg-blue-500 hover:bg-blue-900 text-white px-3 py-1 rounded-md w-full"
        >
          Add to Cart
        </button>
        </div>
    </div>
</div>



    )
}
export default ProductCard;

