
import styles from './styles.module.scss'





export const Discount = () => {


  return (
    <section className={styles.wrapperDiscount}>
      <h3>
      Assine agora e ganhe 10% de desconto
      </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, cupiditate voluptatem! Quia, amet obcaecati soluta commodi q</p>
      <div className={styles.wrapperInput}>
        <input type="text" name="" id="" placeholder="Insira seu e-mail" /><button>Inscrever-se</button>
      </div>
    </section>
  )
}