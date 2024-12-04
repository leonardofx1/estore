'use client'
import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'

import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'

import  * as  z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
 


export const Register = ({setLogin} : {setLogin: Dispatch<SetStateAction<boolean>>}) =>{

  const schemaRegister = z.object({
    name: z.string().min(4, { message: ' insira um nome com pelo menos 4 caracteres.' }),
    email: z.string().email({ message: 'insira um email válido, por exemplo, jjj@gmail.com' }),
    password: z.string().min(5, { message: 'A senha deve ter pelo menos 5 caracteres.' })
    
  })

  const{register,handleSubmit, formState:{errors}}= useForm({
    resolver:zodResolver(schemaRegister)
  })
    const onSubmit:SubmitHandler<FieldValues> = (e) => {
      console.log(e)
    }
  return (
        <div className={styles.formContainer}>
      <h3>Register</h3>
      <input type="text"  placeholder='Nome' {...register('name')}/>
      {errors.name?.message && <span className={styles.errors}> {typeof errors.name.message === 'string' &&  errors.name.message }</span>}
      <input type="text"  placeholder='E-mail' {...register('email')}/>
      {errors.email?.message && <span className={styles.errors}> {typeof errors.email.message === 'string' && errors.email.message }</span>}
      <input type="password" placeholder='Senha' {...register('password')}/>
      {errors.password?.message && <span className={styles.errors}> {typeof errors.password.message === 'string' && errors.password.message  }</span>}
      <div className={styles.wrapperState}><span onClick={() => setLogin((state) => !state)}>Entrar aqui</span></div>
      <button onClick={handleSubmit(onSubmit)}>Inscrever-se</button>
      </div>
    )
}