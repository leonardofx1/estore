'use client'
import Link from "next/link";
import styles from "./styles.module.scss";

import { IoHome, IoMenuOutline } from "react-icons/io5";


import { CiShoppingCart } from "react-icons/ci";

import { HeaderLogin } from "./headerLogin";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="./">
        
        <h1 className={styles.title}>
          <span className={styles.markedLetter}>FX</span>estore
        </h1>
      </Link>
      <nav>
        <ul className={styles.wrapperLi}>
          <li>Sobre</li>
          <li>Suporte</li>
          <Link href='/catalog'><li>Catalogo</li></Link>
        </ul>
      </nav>
      <ul className={styles.wrapperIconsMenu}>
        <li>
          <Link href="./">
            <IoHome />
          </Link>
        </li>
       
        <Link href="cart">
      
          <li>
            <CiShoppingCart />
          </li>
        </Link>
        <HeaderLogin
         />
      
       
      </ul>
      <IoMenuOutline className={styles.menu} />
    </header>
  );
};
