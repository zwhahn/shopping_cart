import useProducts from "../hooks/getProducts";
import Card from "../components/Card";

const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cardContainer">
      {products.map((product) => (
        <Card
          key={product.id}
          imageUrl={product.image}
          productTitle={product.title}
        />
      ))}
    </div>
  );
};

export default Shop;
