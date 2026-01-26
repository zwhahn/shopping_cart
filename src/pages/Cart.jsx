import { useOutletContext } from "react-router";

const Cart = () => {
  const { cartProducts, setQuantity, removeProduct } = useOutletContext();
  console.log("cartProducts: ", cartProducts);

  return (
    <ul>
      {Object.values(cartProducts).map((product) => (
        <li key={product.id}>
          {product.title} :
          <input
            type="number"
            defaultValue={product.quantity}
            onChange={(e) => setQuantity(product, Number(e.target.value))}
          ></input>
          <button type="delete" onClick={() => removeProduct(product.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
