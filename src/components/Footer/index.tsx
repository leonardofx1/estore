import styles from './styles.module.scss'
import leo from '@/assets/leo.png'
import Image from 'next/image'

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {

    return (

        <footer className={styles.footer}>
        <div>
        <section className={styles.wrapperImgFooter}>
                <Image src={leo} alt="foto do criador do site." />
            
        
            </section>
               
                <FaGithub className={styles.gitHub}  />
                <FaLinkedinIn className={styles.linkedin}  />
        </div>
 

        </footer>
    )
}