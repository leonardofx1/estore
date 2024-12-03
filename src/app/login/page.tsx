'use client'

import { Login } from './userlLogin/login';
import styles from './styles.module.scss'
import { useState } from 'react';
import { Register } from './register/register';







export default function UserAuthPage() {
    const [isLoginRegister, setIsLoginRegister] = useState(false)
  return (
    <section className={styles.containerMain}>
     {isLoginRegister?  <Login />:<Register/>}
    </section>
  );
}
