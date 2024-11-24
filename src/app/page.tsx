
import { BestSellers } from "@/components/BestSellers";
import { Discount } from "@/components/Discount";


import { PopularProducts } from "@/components/PopularProducts";
import { ProductsMain } from "@/components/ProductsMain";


export default function Home() {
  return (
    <div >
   
      <ProductsMain />
      <PopularProducts />
      <BestSellers />
      <Discount /> 

   
    </div>
  );
}
