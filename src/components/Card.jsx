import styles from "../styleModules/card.module.css";

const Card = ({ product, addToCart }) => {
  function handleSubmit(e) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={product.image}></img>
      </div>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number"></input>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
