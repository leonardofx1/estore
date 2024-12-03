'use client'
import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { IProducts } from "@/components/context/CartContext";

export default function DetailProduct() {
  const [card,setCard] = useState<IProducts|null>()
  useEffect(()=> {
    const local = localStorage.getItem('item') as string

    const cardParse = JSON.parse(local) as IProducts
     cardParse.price =  Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(cardParse.price as number)
    setCard(cardParse)
   

  },[])
  
  return (
    <article className={styles.containerMain}>
      <div className={styles.wrapperImg}>
        <Image
          src={card?.img as string}
          alt="casaco"
          height={100}
          width={100}
          quality={100}
          unoptimized
        />
      </div>
      <div className={styles.wrapperInfo}>
        <section className={styles.wrapperTitle}>
          <h2>{card?.title}</h2>
          <h3>{card?.price}</h3>
        </section>
        <section className={styles.productFeatures}>
          <p>size</p>

          <div>
            <span>P</span>
            <span>M</span>
            <span>G</span>
            <span>GG</span>
            <span>XG</span>
            <span>XXG</span>
          </div>
        </section>

        <div className={styles.wrapperBtn}>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </article>
  );
}
