import { CardsProducts } from '../CardsProducts'
import styles from './styles.module.scss'


export const BestSellers = () => {




  return (
    <>
    <section>
    <div className={styles.wrapperTitle}>
    <h3><span>Mais</span>Vendidos</h3>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipis accusamus! Numquam mollitia exercitationem obcaecati in ipsum expedita, facilis nam dolorem repellat odit?
    </h2>
    </div>

      <section className={styles.wrapperCards}>
      <CardsProducts brand='lorem' id={5}price={50}title='Camiseta masculina de algodão puro com gola redonda' /> 
      </section>
    </section>
    </>
  )
}