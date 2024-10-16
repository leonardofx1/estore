
import { Carousel } from "@/components/Carousel";
import { CategoryPopular } from "@/components/CategoryPopular";
import { PopularProducts } from "@/components/PopularProducts";
import { ProductsMain } from "@/components/ProductsMain";


export default function Home() {
  return (
    <div >
   
      <ProductsMain />
      <PopularProducts />
      <CategoryPopular />
      <Carousel />
   
    </div>
  );
}
