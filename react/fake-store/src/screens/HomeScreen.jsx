import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { Link } from "react-router";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <header className="header">
        <h1>Fake Store</h1>
        <Link to="/cart" className="cart-button">
          🛒
        </Link>
      </header>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && products && <ProductGrid products={products} />}
    </div>
  );
};

export default HomeScreen;
