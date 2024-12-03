
import styles from './styles.module.scss'






export const Register = () =>{
    return (
        <div className={styles.formContainer}>
      <h3>Register</h3>
      <input type="text"  placeholder='Nome'/>
      <input type="text"  placeholder='E-mail'/>
      <input type="text" placeholder='Senha'/>
      <button>Inscrever-se</button>
      </div>
    )
}