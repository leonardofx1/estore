'use client'
import { IProducts, useCartContext } from "@/components/context/CartContext";
import { CardCart } from "./CardCart";
import styles from "./styles.module.scss";

export default function CartFavorites() {
    const {cart}=useCartContext()
  return (
    <section className={styles.containerMain}>
      <div className={styles.totalValueCart}>
     
        <p>total:  R$ {cart.reduce(({reduce, item}:{reduce:number,item:IProducts}):number=> reduce + item.price,0)}</p>
        <button>Finalizar pedido</button>
      </div>
      <div className={styles.wrapperCards}>
        <CardCart />
      </div>
    </section>
  );
}
