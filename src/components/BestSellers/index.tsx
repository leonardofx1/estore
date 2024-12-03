import { CardsProducts } from '../CardsProducts'
import { Support } from '../Support'
import styles from './styles.module.scss'
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

import products from '@/json/products.json'
import { IProducts } from '../context/CartContext';
export const BestSellers = () => {
const preSelectedIdsCards = [2,4,3,6,9]



  return (
    <>
    <section className={styles.containerMain}>
    <div className={styles.wrapperTitle}>
    <h3><span>Mais</span>  Vendidos</h3>
    
    <h2>
      Lorem ipsum dolor sit amet consectetur adipis accusamus! Numquam mollitia exercitationem obcaecati in ipsum expedita, facilis nam dolorem repellat odit?
    </h2>
    </div>

      <section className={styles.wrapperCards}>
        {products?.map( ({img,id,price,title}:IProducts) =>  preSelectedIdsCards.includes(id)? <CardsProducts key={id} img={img} id={id}price={price}title={title} /> :'')}
    
     
      </section>
    </section>
    <section className={styles.wrapperSupport}>
      <Support icon={<RiExchangeFundsFill />} title='Política de troca fácil' paragraph='Oferecemos uma política de troca sem complicações'/>
      <Support icon={<MdVerified />} title='Política de devolução de 7 dias' paragraph=' Oferecemos uma política de devolução gratuita de 7 dias'/>
      <Support icon={<MdOutlineSupportAgent/>} title='Melhor suporte ao cliente' paragraph='Nós fornecemos suporte ao cliente 24 horas por dia, 7 dias por semana'/>
    </section>
    </>
  )
}