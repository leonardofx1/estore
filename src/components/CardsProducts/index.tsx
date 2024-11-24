

import Image from "next/image";
import styles from "./styles.module.scss";

import casaco from "@/assets/casaco.png";
import Link from "next/link";
import { IProducts } from "../context/CartContext";



export const CardsProducts = ({ price, title, id }: IProducts) => {
  return (
    <div className={styles.containerCard}>
    

      <Link href="./detailProduct" key={id}>
        <article className={styles.cardBody}>
          <div className={styles.cardImg}>
            <Image src={casaco} alt="produtos" />
          </div>
          <p className={styles.cardTitle}> {title}</p>
          <p className={styles.price}>$ {price}</p>
          
        </article>
      </Link>
    </div>
  );
};
