
import Link from 'next/link';
import styles from './styles.module.scss'

import {  IoHome, IoMenuOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

import { MdOutlineSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
export const Header = () => {



    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.wrapperLi}>
                    <li>Sobre</li>
                    <li>Suporte</li>
                    <li>Catalogo</li>
                </ul>
            </nav>
           <Link href='./'> <h1 className={styles.title}>
                <span className={styles.markedLetter}>FX</span>estore
            </h1></Link>
            <ul className={styles.wrapperIconsMenu}>
                <li><Link href='./'><IoHome /></Link></li>
                <li><MdOutlineSearch /></li>
                <li><MdFavoriteBorder /></li>
                <li><CiLogin /></li>    
            </ul>
            <IoMenuOutline className={styles.menu}/>
        </header>
    )
}