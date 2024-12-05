'use client'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

import styles from './styles.module.scss'



import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'

import  * as  z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { storage } from '@/utils/storage'
 




export const Login = ({setLogin}:{setLogin:Dispatch<SetStateAction<boolean>>}) =>{
  const schemaLogin = z.object({
    name: z.string().min(4, { message: ' insira um nome com pelo menos 4 caracteres.' }),
    
    password: z.string().min(5, { message: 'A senha deve ter pelo menos 5 caracteres.' })
    
  })
  const{register,handleSubmit, formState:{errors}}= useForm({
    resolver:zodResolver(schemaLogin)
  }) 
 
  const route = useRouter()
  const onSubmit:SubmitHandler<FieldValues> = (e) => {
      storage.handleLoginUser('login',{name:e.name})
    route.push('/')
  }
    return (
        <div className={styles.formContainer}>
      <h3>Login</h3>

      <input type="text"  placeholder='Nome' {...register('name')}/>
      {errors.name?.message && <span className={styles.errors}> {typeof errors.name.message === 'string' &&  errors.name.message }</span>}
      <input type="password" placeholder='Senha' {...register('password')}/>
      {errors.password?.message && <span className={styles.errors}> {typeof errors.password.message === 'string' && errors.password.message  }</span>}
      <div className={styles.wrapperState}><span onClick={() => setLogin((state) => !state)}>Criar uma conta </span></div>
      <button onClick={handleSubmit(onSubmit)}>Entrar</button>
      </div>
    )
}


