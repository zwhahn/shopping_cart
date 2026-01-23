import { useEffect, useState } from "react";

const useProducts = ({ id = "" } = {}) => {
  const FAKESTORE_URL = "https://fakestoreapi.com/products";
  console.log(id);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(FAKESTORE_URL + `/${id}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
