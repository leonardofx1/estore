"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

import casaco from "@/assets/casaco.png";
import Link from "next/link";
import { IProducts } from "../context/CartContext";

import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
export const CardsProducts = ({ brand, price, title, id }: IProducts) => {
  const { setCart, cart } = useCartContext();
  const [isFavorite, setIsFavorite] = useState(cart.some(({ id }) => id == id));

  console.log(isFavorite, "id:", id);

  return (
    <div className={styles.containerCard}>
      {isFavorite ? (
        <MdOutlineFavorite className={styles.favorite}
          onClick={() => {
            console.log(id);
            setIsFavorite((state) => !state);
            setCart((state) => state.filter((state) => state.id !== id));
          }}
        />
      ) : (
        <>
          <MdFavoriteBorder
            className={styles.favoriteFalse}
            onClick={() => {
              setIsFavorite((state) => !state)
              setCart((state) => [...state, { brand, title, price, id }]);
            }}
          />
        </>
      )}
      <Link href="./detailProduct" key={id}>
        <article className={styles.cardBody}>
          <div className={styles.cardImg}>
            <Image src={casaco} alt="produtos" />
          </div>
          <p className={styles.price}>$ {price}</p>
          <p className={styles.cardTitle}> {title}</p>
          <p className={styles.cardBrand}> {brand}</p>
        </article>
      </Link>
    </div>
  );
};
