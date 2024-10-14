
import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'


interface ICardsCategory {
    img:StaticImageData;
    brand:string
}

export const CardsCategoryPopular = ({img, brand}:ICardsCategory) => {

    return (
        <>
        <article className={styles.cardBody}>
            <p className={styles.nameCategory}>{brand}</p>
        <Image src={img} alt=' produtos popular' /> 
        </article>
        </>
    )
}