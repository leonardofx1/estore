'use client'

import { Login } from './userlLogin/login';
import styles from './styles.module.scss'






export default function UserAuthPage() {
   
  return (
    <section className={styles.containerMain}>
      <Login />
    </section>
  );
}
