import { CardsProducts } from '../CardsProducts'
import styles from './styles.module.scss'
import af1 from '../../../public/af1.png'
export const  PopularProducts = () => {


    return (
        <>
        <div className={styles.wrapperTitle}>
    <h3><span>Produtos</span>  Popular</h3>
    
    <h2>
      Lorem ipsum dolor sit amet consectetur adipis accusamus! Numquam mollitia exercitationem obcaecati in ipsum expedita, facilis nam dolorem repellat odit?
    </h2>
    </div>
           <div className={styles.wrapperCardsProducts}>
           <CardsProducts img={af1} id={26} price={45.00} title='Camiseta polo'  />
          
           
           </div>
            
            </> 
    )
}

