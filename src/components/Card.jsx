import styles from "../styleModules/card.module.css";

const Card = ({ imageUrl, productTitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={imageUrl}></img>
      </div>
      <h2 className={styles.productTitle}>{productTitle}</h2>
    </div>
  );
};

export default Card;
