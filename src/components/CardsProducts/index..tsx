import Image from 'next/image'
import styles from './styles.module.scss'

import casaco from '@/assets/casaco.png'
import Link from 'next/link'

export const CardsProducts = () => {


    return (
      <Link href='./detailProduct'>
        <article className={styles.cardBody}>
                <div className={styles.cardImg}>
                <Image src={casaco} alt='produtos' />
                </div>
            <p className={styles.price}>$ 45,00</p>
            <p className={styles.cardTitle}> Camiseta polo</p>
            <p className={styles.cardBrand}> Lacoste</p>
        </article>
      </Link>
    )
}