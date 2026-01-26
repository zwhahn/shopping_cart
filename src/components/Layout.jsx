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

  function setQuantity(product, quantity) {
    setCartProducts((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: Number(quantity),
      },
    }));
  }

  function removeProduct(productId) {
    setCartProducts((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  }

  const cartData = {
    cartProducts: cartProducts,
    addToCart: addToCart,
    setQuantity: setQuantity,
    removeProduct: removeProduct,
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.storeName}>My Shop</h1>
          <Navbar totalProductsCount={totalProductsCount} />
        </header>
        <main className={styles.main}>
          <Outlet context={cartData} />
        </main>
      </div>
    </>
  );
};

export default Layout;
