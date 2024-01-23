'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';

const NavLink = ({ url, children }) => {
  const path = usePathname();

  return (
    <Link href={url} className={`${styles.navLink} ${path.startsWith(url) ? styles.active : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
