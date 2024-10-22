"use client";
import { createContext, SetStateAction, useContext, useState } from "react";
export interface IProducts {
  id:number,
  title: string;
  brand: string;
  price: number;
  Img?: string;
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

  return { cart, setCart };
};
export { CartProvider, contextCart, useCartContext };
