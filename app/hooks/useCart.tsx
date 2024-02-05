import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Product from "../types/Product";
import toast from "react-hot-toast";

type CartContextType ={
    cartTotalQty: number;
    CartProducts: Product[] | null;
    handleAddProductToCart: (product:Product)=> void;
    handleRemoveProductFromCart: (product:Product)=> void;
    handleClearCart: ()=> void;
};
export const CartContext = createContext<CartContextType | null>(null);

interface Props{
    [propName: string]:any;
}
export const CartContextProvider = (props: Props)=>{
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [CartProducts, setCartProducts] = useState<Product[] | null>(null);
    
useEffect(()=>{
    const cartItems: any = localStorage.getItem("shopItems");
    const productsInCart: Product[] | null = JSON.parse(cartItems);
    setCartProducts(productsInCart);
},[CartProducts])

const handleAddProductToCart = useCallback((product: Product) =>{
    setCartProducts((prev) => {
        let updatedCart;
        if(prev){
            updatedCart = [...prev, product]
        }else{
            updatedCart = [product]
        }
        localStorage.setItem("shopItems", JSON.stringify(updatedCart))
        toast.success("Product added to cart");
        return updatedCart;
    })
}, [CartProducts]);

const handleRemoveProductFromCart = useCallback((product: Product) =>{
    if(CartProducts)
    {
        const filteredProducts = CartProducts.filter((item)=>{
            return item.id !== product.id
        })
        setCartProducts(filteredProducts)
        localStorage.setItem("shopItems", JSON.stringify(filteredProducts))
        toast.success("Product removed from cart"); 
    }
}, [CartProducts])
    

const handleClearCart = useCallback(()=>{
    setCartProducts(null)
    setCartTotalQty(0)
    localStorage.setItem("shopItems", JSON.stringify(null))
    toast.success("Product removed from cart"); 
}, [CartProducts])
const value ={
    cartTotalQty,
    CartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleClearCart
}

return <CartContext.Provider value = {value} {... props}/>
}
export const useCart = () => {
    const context = useContext (CartContext);
    if(context == null){
    throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
}