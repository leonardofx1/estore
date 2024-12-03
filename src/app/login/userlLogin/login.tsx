
import styles from './styles.module.scss'






export const Login = () =>{
    return (
        <div className={styles.formContainer}>
      <h3>Login</h3>
      <input type="text"  placeholder='Nome'/>
      <input type="text" placeholder='Senha'/>
      <button>Entrar</button>
      </div>
    )
}