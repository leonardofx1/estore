import Image from "next/image";
import styles from './styles.module.scss'

import mainstore from "../../../public/mainstore.jpg";
import casaco from '../../../public/assets/casaco.png'
export const ProductsMain = () => {
  return (
      <section className={styles.wrapperImgs}>
        <Image className={styles.firstImg} src={mainstore} unoptimized quality={100}alt="produtos" />
        <div className={styles.wrapperSecondaryImg}>
        <Image className={styles.secondaryImg} src={casaco} unoptimized quality={100} alt="produtos" />
        <button>+ Adicionar ao carrinho</button>
        </div>
      </section>
 
  );
};
