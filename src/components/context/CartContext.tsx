"use client";
import { StaticImageData } from "next/image";
import { createContext, SetStateAction, useContext, useState } from "react";
export interface IProducts {
  id:number,
  title: string;

  price: number;
  img: StaticImageData | string;
}
interface ICart {
  cart: IProducts[];
  setCart: React.Dispatch<SetStateAction<IProducts[]>>;
}

const contextCart = createContext<ICart | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProducts[]>([]);

  return (
    <contextCart.Provider value={{ cart, setCart }}>
     
      {children}
    </contextCart.Provider>
  );
};

const useCartContext = () => {
  const { cart, setCart } = useContext(contextCart) as ICart;

  const handleAddCardCart = (card:IProducts) => {
    const hasCard = cart.some(({id}) => id === card.id)
   
   
    if(hasCard)return 
    
    setCart((state)=> [...state, card] )
  } 
const handleDeleteCard = (cardId:number) => {
    setCart((state)=> state.filter(({id}) => id !== cardId ))
}
  return { cart, handleDeleteCard ,handleAddCardCart };
};
export { CartProvider, contextCart, useCartContext };
