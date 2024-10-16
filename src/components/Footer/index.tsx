import styles from './styles.module.scss'
import leo from '@/assets/leo.png'
import Image from 'next/image'
import typescript from './typescript.jpg'

export const Footer = () => {

    return (

        <footer className={styles.footer}>
        <div>
        <section className={styles.wrapperImgFooter}>
                <Image src={leo} alt="foto do criador do site." />
            
        
            </section>
               
                <Image className={styles.gitHub}src={typescript} alt="foto do criador do site." />
                <Image className={styles.linkedin}src={typescript} alt="foto do criador do site." />
        </div>
 

        </footer>
    )
}