import Image from 'next/image'
import styles from './styles.module.scss'
import casaco from '@/assets/casaco.png'

import { RiDeleteBinLine } from "react-icons/ri";
export const CardCart = () => {


    return(<>
        <article className={styles.wrapperCard}>
          <div className={styles.wrapperImgDescription}>
          <Image  className={styles.imgCart} alt='product' src={casaco}  width={300} height={300}  />
               <div className={styles.containerDescription}>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur nihil beatae velit illum dolorum, aspernatur quibusdam quos expedita similique aliquam. Voluptatem vel ducimus suscipit saepe numquam vero, aperiam odit.</p>
               <span className={styles.price}>R$22,98</span>
               </div>
          
            </div>
            <input type="number" name="" id="" />
                <span className={styles.close}> <RiDeleteBinLine /></span>
        </article>
    </>)
}