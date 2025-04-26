import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { ACTIONS } from "../context/cartReducer";
import "../styles/HomeScreen.css";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, dispatch } = useCart();
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

  const handleNavigation = () => {
    dispatch({ type: ACTIONS.TOGGLE_OPEN_CART });
  };
  cart;
  return (
    <div className="home-container">
      <header className="header">
        <h1>Fake Store</h1>
        <div>
          <Link to="/cart" className="cart-button" onClick={handleNavigation}>
            🛒
          </Link>
          <strong>({cart.totalItems ?? 0})</strong>
        </div>
      </header>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && products && <ProductGrid products={products} />}
    </div>
  );
};

export default HomeScreen;
