import { Outlet } from "react-router";
import Navbar from "./Navbar";
import styles from "../styleModules/layout.module.css";
import { useState } from "react";

const Layout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const totalProductsCount = cartProducts.length;

  function addToCart(product) {
    setCartProducts([...cartProducts, product]);
    return;
  }

  const cartData = {
    cartProducts: cartProducts,
    addToCart: addToCart,
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.storeName}>My Shop</h1>
        <Navbar totalProductsCount={totalProductsCount} />
      </header>
      <main className={styles.main}>
        <Outlet context={cartData} />
      </main>
    </>
  );
};

export default Layout;
