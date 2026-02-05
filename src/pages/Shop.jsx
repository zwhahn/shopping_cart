import useProducts from "../hooks/getProducts";
import Card from "../components/Card";
import styles from "../styleModules/shop.module.css";
import { useOutletContext } from "react-router";
import { useState } from "react";

const Shop = () => {
  const { addToCart } = useOutletContext();
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState(products);

  function handleSearch(e) {
    const newSeach = e.target.value;
    setSearch(newSeach);
    // filterProducts(newSeach);
  }

  // function filterProducts(searchWord) {
  //   console.log("filterProducts called");
  //   const newFilteredProducts = products.filter((product) =>
  //     product.title.startsWith(searchWord),
  //   );
  //   setFilteredProducts(newFilteredProducts);
  // }

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("products: ", products);
  // console.log("filteredProducts: ", filteredProducts);
  return (
    <>
      <div>
        <input type="text" onChange={handleSearch}></input>
        <p>Search: {search}</p>
        <div className={styles.cardContainer}>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
