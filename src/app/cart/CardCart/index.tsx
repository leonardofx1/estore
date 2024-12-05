import Image from 'next/image'
import styles from './styles.module.scss'


import { RiDeleteBinLine } from "react-icons/ri";
import { IProducts, useCartContext } from '@/components/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';
 
export const CardCart = ({id,img,price,title}:IProducts) => {

const {handleDeleteCard} = useCartContext()
    return(<>
        <article key={id} className={styles.wrapperCard}>
          <div className={styles.wrapperImgDescription}>
          <Image  className={styles.imgCart} alt='product' src={img}  width={300} height={300}  />
               <div className={styles.containerDescription}>
               <p>{title}</p>
               <span className={styles.price}>{price ? formatCurrency(price as number): 0}</span>
               </div>
          
            </div>
            <input type="number" name="" id="" />
                <span onClick={() => handleDeleteCard(id)} className={styles.close}> <RiDeleteBinLine /></span>
        </article>
    </>)
}