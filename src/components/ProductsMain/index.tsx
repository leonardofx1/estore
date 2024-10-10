import Image from "next/image";
import styles from './styles.module.scss'

import mainstore from "@/assets/mainstore.jpg";

export const ProductsMain = () => {
  return (
      <section className={styles.wrapperImgs}>
        <Image className={styles.firstImg} src={mainstore} alt="produtos" />
        <Image className={styles.secondaryImg} src={mainstore} alt="produtos" />
      </section>
 
  );
};
