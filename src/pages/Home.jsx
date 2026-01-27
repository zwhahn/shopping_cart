import React from "react";
import styles from "../styleModules/home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1>Welcome to My Shop</h1>
        <p>
          All items are sourced locally from{" "}
          <a href="https://fakestoreapi.com/">FakestoreAPI</a>{" "}
          and all sales are not final. Enjoy Shopping!
        </p>
      </div>
    </>
  );
};

export default Home;
