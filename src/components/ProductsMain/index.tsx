import Image from "next/image";
import styles from './styles.module.scss'

import mainstore from "../../../public/mainstore.jpg";

export const ProductsMain = () => {
  return (
      <section className={styles.wrapperImgs}>
        <Image className={styles.firstImg} src={mainstore} unoptimized quality={100}alt="produtos" />
      
        
      </section>
 
  );
};
