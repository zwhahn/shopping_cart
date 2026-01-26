import styles from "../styleModules/card.module.css";
import { useState } from "react";

const Card = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    addToCart(product, quantity);
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={product.image}></img>
      </div>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="0"
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
