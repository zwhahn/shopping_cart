import React from "react";
import { Link } from "react-router";
import styles from "../styleModules/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="">Home</Link>

      <Link to="shop">Shop</Link>

      <Link to="cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
