import { useOutletContext } from "react-router";

const Cart = () => {
  const { cartProducts } = useOutletContext();
  console.log("cartProducts: ", cartProducts);

  return (
    <ul>
      {Object.values(cartProducts).map((product) => (
        <li key={product.id}>
          {product.title} : {product.quantity}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
