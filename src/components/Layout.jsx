import { Outlet } from "react-router";
import Navbar from "./Navbar";
import styles from "../styleModules/layout.module.css";
import { useState } from "react";

const Layout = () => {
  const [cartProducts, setCartProducts] = useState({});
  const totalProductsCount = Object.values(cartProducts).reduce(
    (sum, curr) => curr.quantity + sum,
    0,
  );

  function addToCart(product, quantity) {
    setCartProducts((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity:
          Number(prevCart[product.id]?.quantity || 0) + Number(quantity),
      },
    }));
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
