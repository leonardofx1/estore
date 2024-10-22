'use client'
import { CartProvider } from "./CartContext";




const  AppProvider = ({ children }:{children:React.ReactNode}) => {
  return <CartProvider>{children}</CartProvider>;
};
export default AppProvider