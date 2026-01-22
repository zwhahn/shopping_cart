import { Outlet } from "react-router";
import Navbar from "./Navbar";
import styles from "../styleModules/layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.storeName}>My Shop</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
