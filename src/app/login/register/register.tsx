'use client'
import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'






export const Register = ({setLogin} : {setLogin: Dispatch<SetStateAction<boolean>>}) =>{
    return (
        <div className={styles.formContainer}>
      <h3>Register</h3>
      <input type="text"  placeholder='Nome'/>
      <input type="text"  placeholder='E-mail'/>
      <input type="text" placeholder='Senha'/>
      <div className={styles.wrapperState}><span onClick={() => setLogin((state) => !state)}>Entrar aqui</span></div>
      <button>Inscrever-se</button>
      </div>
    )
}