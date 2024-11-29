'use client'
import { useCartContext } from "@/components/context/CartContext";
import { CardCart } from "./CardCart";
import styles from "./styles.module.scss";

export default function CartFavorites() {
  const {cart} =useCartContext()

  const calcTotal = cart.length === 0 ?0 : (cart.reduce((acc,card) => acc + card.price ,0) )* cart.length
  return (
    <section className={styles.containerMain}>
      <div>
        <div className={styles.wrapperCards}>
          
       {cart?.map((card)=> <CardCart key={card.id} {...card }/>)}
        </div>
        <div className={styles.totalValueCart}>
          <div className={styles.wrapperTotal}>
            <p className={styles.title}>Total</p>

            <div  >
              <p>SubTotal</p>
              <span>R$ {calcTotal}</span>
            </div>
            <div>
            <p>Taxa de envio </p>
            <span>R$ {cart.length === 0 ? 0:10 }</span>
          </div>
          <div>
            <p>Total </p>
            <span>R$ {calcTotal === 0 ? 0 : calcTotal + 10  }</span>
          </div>
          <button>Finalizar pedido</button></div>
        </div>
      </div>
    </section>
  );
}
