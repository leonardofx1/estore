'use client';

import { storage } from '@/utils/storage';
import Link from 'next/link';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { useEffect, useState } from 'react';

export const HeaderLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(storage.hasLogin('login'));
    }
  }, []);

  const handleLogout = () => {
    storage.handleLogoutUser('login');
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <li>
          <CiLogout onClick={handleLogout} />
        </li>
      ) : (
        <li>
          <Link href='./login'>
            <CiLogin />
          </Link>
        </li>
      )}
    </>
  );
};
