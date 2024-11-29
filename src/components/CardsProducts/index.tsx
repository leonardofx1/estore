'use client'

import Image from "next/image";
import styles from "./styles.module.scss";

import Link from "next/link";
import { IProducts, useCartContext } from "../context/CartContext";



export const CardsProducts = ({ price, title, id ,img}: IProducts) => {
  const {handleAddCardCart} = useCartContext()
  return (
    <div className={styles.containerCard}>
    

      <Link href="./detailProduct" key={id}>
        <article className={styles.cardBody}>
          <div className={styles.cardImg}>
            <Image src={img} alt="produtos" width={300} height={300} />
          </div>
          <p className={styles.cardTitle}> {title}</p>
          <p onClick={() => {handleAddCardCart({id,img,price,title})}} className={styles.price}>$ {price}</p>
          
        </article>
      </Link>
    </div>
  );
};
