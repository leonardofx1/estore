import { CardsProducts } from '../CardsProducts'
import styles from './styles.module.scss'

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
           <CardsProducts id={26} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={27} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={28} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={29} brand='lacoste' price={45.00} title='Camiseta polo'  />
          
           <CardsProducts id={26} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={27} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={28} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={29} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={30} brand='lacoste' price={45.00} title='Camiseta polo'  />
           <CardsProducts id={30} brand='lacoste' price={45.00} title='Camiseta polo'  />
           
           </div>
            
            </> 
    )
}

