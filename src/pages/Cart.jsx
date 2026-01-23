import { useOutletContext } from "react-router";

const Cart = () => {
  const { cartProducts } = useOutletContext();

  return (
    <ul>
      {cartProducts.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default Cart;
