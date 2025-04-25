import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import "../styles/CartScreen.css";
import ProductGrid from "../components/ProductGrid";

const CartScreen = () => {
  const { cart } = useCart();

  return (
    <div className="page-container">
      <header className="header">
        <Link to="/home" className="back-button">
          ←
        </Link>
        <h1>Your Cart</h1>
      </header>

      {cart.cartItems?.length === 0 ? (
        <p className="empty-message">Your cart is empty 🛍️</p>
      ) : (
        <div className="cart-content">
          <ProductGrid products={cart.cartItems} isCart={true} />
          <h3>Total: ${cart.totalPrice?.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
