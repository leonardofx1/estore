'use client'
import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { IProducts, useCartContext } from "@/components/context/CartContext";
import { formatCurrency } from "@/utils/formatCurrency";

export default function DetailProduct() {
  const [card,setCard] = useState<IProducts|null>()
  const {handleAddCardCart} = useCartContext()
  useEffect(()=> {
    const local = localStorage.getItem('item') as string

    const cardParse = JSON.parse(local) as IProducts
   
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
          <h3>{card?.price ?formatCurrency(card.price as number):0}</h3>
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
          <button onClick={() => {
            if(card)
            handleAddCardCart({id:card?.id,img:card?.img,price:card?.price, title:card?.title})
          
          }
          
          }>Adicionar ao carrinho</button>
        </div>
      </div>
    </article>
  );
}
