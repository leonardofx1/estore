
import { PopularProducts } from "@/components/PopularProducts";
import { ProductsMain } from "@/components/ProductsMain";
import { WrapperGlobal } from "@/components/WrapperGlobal";

export default function Home() {
  return (
    <div >
     <WrapperGlobal >
      <ProductsMain />
      <PopularProducts />
      </WrapperGlobal > 
    </div>
  );
}
