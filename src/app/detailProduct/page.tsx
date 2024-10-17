import Image from "next/image";
import styles from "./styles.module.scss";
import casaco from "@/assets/casaco.png";
export default function DetailProduct() {
  return (
    <article className={styles.containerMain}>
      <div className={styles.wrapperImg}>
        <Image src={casaco} alt="casaco" quality={100} unoptimized />
      </div>
      <div className={styles.wrapperInfo}>
        <section className={styles.wrapperTitle}>
          <h2>Acme Hoodie</h2>
          <h3>$ 500.00</h3>
        </section>
        <section className={styles.productFeatures}>
          <p>size</p>

          <div>
            
            <span>P</span>
            <span>M</span>
            <span>G</span>
            <span>GG</span>
            <span>XG</span>
            <span>XXG</span>
          </div>
        </section>

        <div className={styles.wrapperBtn}>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </article>
  );
}
