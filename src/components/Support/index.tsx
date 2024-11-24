import { ReactNode } from 'react';
import styles from './styles.module.scss'

interface ISupport {
  icon:ReactNode;
  title:string;
  paragraph:string;
}
 
export const Support= ({icon,title,paragraph}:ISupport) => {
  return (

        <div className={styles.wrapper}>
         <div className={styles.icon}>
         {icon}
         </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.paragraph}>{paragraph}</p>
        </div>
  
  )
};
