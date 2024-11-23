import { CardsProducts } from '../CardsProducts'
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

