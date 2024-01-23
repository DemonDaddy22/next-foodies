import logo from "@/assets/logo.png";
import AppHeaderBackground from "@/components/AppHeaderBackground";
import Image from "next/image";
import Link from "next/link";

import NavLink from "../NavLink";

import styles from "./styles.module.css";

const AppHeader = () => {
  return (
    <>
      <AppHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="Food on a plate" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink url="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink url="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
