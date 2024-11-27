import { CardCart } from "./CardCart";
import styles from "./styles.module.scss";

export default function CartFavorites() {
  return (
    <section className={styles.containerMain}>
      <div>
        <div className={styles.wrapperCards}>
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
        </div>
        <div className={styles.totalValueCart}>
          <div className={styles.wrapperTotal}>
            <p className={styles.title}>Total</p>

            <div  >
              <p>SubTotal</p>
              <span>R$ 1000</span>
            </div>
            <div>
            <p>Taxa de envio </p>
            <span>R$ 10,00</span>
          </div>
          <div>
            <p>Total </p>
            <span>R$1100</span>
          </div>
          <button>Finalizar pedido</button></div>
        </div>
      </div>
    </section>
  );
}
