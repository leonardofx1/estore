
import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'






export const Login = ({setLogin}:{setLogin:Dispatch<SetStateAction<boolean>>}) =>{
    return (
        <div className={styles.formContainer}>
      <h3>Login</h3>
      <input type="text"  placeholder='Nome'/>
      <input type="text" placeholder='Senha'/>
      <div className={styles.wrapperState}><span onClick={() => setLogin((state) => !state)}>Criar uma conta </span></div>
      <button>Entrar</button>
      </div>
    )
}