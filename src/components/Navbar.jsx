import React from "react";
import { Link } from "react-router";
import styles from "../styleModules/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="">
        Home
      </Link>

      <Link className={styles.link} to="shop">
        Shop
      </Link>

      <Link className={styles.link} to="cart">
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
