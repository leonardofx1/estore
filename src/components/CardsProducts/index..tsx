import Image from 'next/image'
import styles from './styles.module.scss'

import casaco from '@/assets/casaco.png'

export const CardsProducts = () => {


    return (
        <article className={styles.cardBody}>
            <Image className={styles.cardImg}src={casaco} alt='produtos' />
            <p className={styles.price}>$ 45,00</p>
            <p className={styles.cardTitle}> Camiseta polo</p>
            <p className={styles.cardBrand}> Lacoste</p>
        </article>
    )
}