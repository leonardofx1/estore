import { CardsProducts } from '@/components/CardsProducts'
import styles from './styles.module.scss'





export default function Catalog () {


    return (
        <main className={styles.main}><aside className={styles.aside}>
            <p>Filtros</p>
            <section className={styles.wrapperInput}>
                <p>Categorias</p>
                <label htmlFor="">

                    <input type="checkbox"  />
                    mulher
                </label>
                <label htmlFor="">
                    <input type="checkbox"  />
                    crianças
                </label>
                <label htmlFor="">
                    <input type="checkbox"  />
                    homem
                </label>

            
            </section>
        </aside>
            <section className={styles.wrapperCards}>
            <div className={styles.wrapperTitle}>
                <h3><span>TODAS AS</span>  COLEÇÕES</h3>
             <select name="" id="">   <optgroup>
                    <option value="">Relevante</option>
                    <option value="low-high">Classificar por: Menor para o Maior </option>
                    <option value="high-low">Classificar por: Maior para o Menor</option>
                </optgroup></select>
            </div>
            <div className={styles.containerCards}>
            <CardsProducts brand='lorem' id={5}price={50}title='Camiseta masculina de algodão puro com gola redonda' /> 
      <CardsProducts brand='lorem' id={5}price={50}title='Camiseta masculina de algodão puro com gola redonda' /> 
      <CardsProducts brand='lorem' id={5}price={50}title='Camiseta masculina de algodão puro com gola redonda' /> 
      <CardsProducts brand='lorem' id={5}price={50}title='Camiseta masculina de algodão puro com gola redonda' /> 
      <CardsProducts brand='lorem' id={5}price={50}title='Camiseta masculina de algodão puro com gola redonda' /> 
            </div>
            </section>
        </main>
    )
}