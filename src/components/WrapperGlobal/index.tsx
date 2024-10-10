import styles from './styles.module.scss'



export const WrapperGlobal = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.wrapper}>
        
    {children}
  </div>
  )
};
