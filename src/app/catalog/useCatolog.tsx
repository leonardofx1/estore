import products from "@/json/products.json";
import { useState } from "react";
import { IProducts } from "@/components/context/CartContext";

export const useCatolog = () => {
  const allProducts = products;
  const [filterList, setFilterList] = useState<IProducts[]>([]);
  const [category, setCategory] = useState("");

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCategory(value);
    setFilterList(allProducts.filter((card) => card.gender === value));
  };

  return {filterList,category,handleChangeCategory, allProducts}
};
