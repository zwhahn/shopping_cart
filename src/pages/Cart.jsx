import { useOutletContext } from "react-router";
import styles from "../styleModules/cart.module.css";

const Cart = () => {
  const { cartProducts, setQuantity, removeProduct } = useOutletContext();
  console.log("cartProducts: ", cartProducts);

  return (
    <div className={styles.cartContainer}>
      {Object.values(cartProducts).map((product) => (
        <div className={styles.cartItemContainer} key={product.id}>
          <div className={styles.imageContainer}>
            <img className={styles.productImage} src={product.image}></img>
          </div>
          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.productQuantity}>
            <input
              type="number"
              defaultValue={product.quantity}
              min="0"
              onChange={(e) => setQuantity(product, Number(e.target.value))}
            ></input>
            <button
              className={styles.deletetBtn}
              type="delete"
              onClick={() => removeProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
