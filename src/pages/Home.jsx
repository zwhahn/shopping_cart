import React from "react";
import styles from "../styleModules/home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.welcomeContainer}>
          <h2 className={styles.welcome}>Welcome To</h2>
          <h1 className={styles.title}>My Whimsical Shop</h1>
        </div>
        <p className={styles.description}>
          All items are sourced locally from{" "}
          <a href="https://fakestoreapi.com/">FakestoreAPI</a> and all sales are
          not final. Enjoy Shopping!
        </p>
      </div>
    </>
  );
};

export default Home;
