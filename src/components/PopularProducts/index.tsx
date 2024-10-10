import { CardsProducts } from '../CardsProducts/index.'
import styles from './styles.module.scss'

export const  PopularProducts = () => {


    return (
        <>
        <section className={styles.wrapperPopularProducts}>
            <div className={styles.wrapperTitleTags}>
                <h2>Produtos populares</h2>
                <ul className={styles.tags}> 
                    <li>tags</li>
                    <li>tags</li>
                    <li>tags</li>
                </ul>
            </div>
        </section>
           <div className={styles.wrapperCardsProducts}>
           <CardsProducts />
           <CardsProducts />
           <CardsProducts />
           <CardsProducts />
           </div>
            
            </> 
    )
}