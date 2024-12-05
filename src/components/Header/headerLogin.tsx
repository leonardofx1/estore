'use client'

import {storage} from'@/utils/storage' 
import { CiLogin, CiLogout } from 'react-icons/ci'



export const HeaderLogin = ()=> {




    return (
      <>
      {
          storage.hasLogin('login') ?  <li>
          <CiLogout/>
        </li>:  <li>
          <CiLogin />
        </li>
      }
      </>
    )
}