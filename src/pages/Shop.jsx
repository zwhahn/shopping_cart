import useProducts from "../hooks/getProducts";
import Card from "../components/Card";
import styles from "../styleModules/shop.module.css";
import { useOutletContext } from "react-router";

const Shop = () => {
  const { addToCart } = useOutletContext();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.cardContainer}>
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
