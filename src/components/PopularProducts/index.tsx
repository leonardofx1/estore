import { CardsProducts } from '../CardsProducts'
import styles from './styles.module.scss'

import products from '@/json/products.json'
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
          {products.map(({id,img,price,title}) =>  <CardsProducts key={id}img={img} id={id} price={price} title={title} />)}
          
           
           </div>
            
            </> 
    )
}

