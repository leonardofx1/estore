'use client'

import Image from "next/image";
import styles from "./styles.module.scss";

import Link from "next/link";
import { IProducts } from "../context/CartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/navigation";


export const CardsProducts = ({ price, title, id ,img}: IProducts) => {

  const route = useRouter()
  const handleAddStorage =() => {
    localStorage.setItem('item', JSON.stringify({price,title,id,img}))
    route.push('./detailProduct')
  }

  return (
    <div onClick={handleAddStorage}>
    


        <article className={styles.cardBody}>
          <div className={styles.cardImg}>
            <Image src={img} alt="produtos" width={300} height={300} />
          </div>
          <p className={styles.cardTitle}> {title}</p>
          <p className={styles.price}>{formatCurrency(price as number )}</p>
          
        </article>
   
    </div>
  );
};
