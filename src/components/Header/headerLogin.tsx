'use client'

import {storage} from'@/utils/storage' 
import Link from 'next/link'
import { CiLogin, CiLogout } from 'react-icons/ci'



export const HeaderLogin = ()=> {
    const handleLogout= () => {
        storage.handleLogoutUser('login')
    }



    return (
      <>
      {
          storage.hasLogin('login') ?  <li>
          <CiLogout onClick={() => handleLogout()}/>
        </li>:  <li>
    <Link href='./login' >
    <CiLogin  />
    </Link>
        </li>
      }
      </>
    )
}