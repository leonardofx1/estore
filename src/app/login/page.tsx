'use client'

import { Login } from './userlLogin/login';
import styles from './styles.module.scss'
import { useState } from 'react';
import { Register } from './register/register';







export default function UserAuth() {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <section className={styles.containerMain}>
     {isLogin?  <Login setLogin ={setIsLogin}/>:<Register setLogin={setIsLogin} />}
    </section>
  );
}
