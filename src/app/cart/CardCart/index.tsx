import Image from 'next/image'
import styles from './styles.module.scss'
import casaco from '@/assets/casaco.png'
import { IoMdClose } from "react-icons/io";
export const CardCart = () => {


    return(<>
        <article className={styles.wrapperCard}>
            <Image  className={styles.imgCart} alt='product' src={casaco}  width={300} height={300}  />
            <div>
                <span className={styles.close}> <IoMdClose /></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur nihil beatae velit illum dolorum, aspernatur quibusdam quos expedita similique aliquam. Voluptatem vel ducimus suscipit saepe numquam vero, aperiam odit.</p>
                <span className={styles.price}>R$22,98</span>
            </div>
        </article>
    </>)
}