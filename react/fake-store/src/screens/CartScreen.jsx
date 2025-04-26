import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import "../styles/CartScreen.css";
import ProductGrid from "../components/ProductGrid";
import { ACTIONS } from "../context/cartReducer";

const CartScreen = () => {
  const { cart, dispatch } = useCart();

  const handleNavigation = () => {
    dispatch({ type: ACTIONS.TOGGLE_OPEN_CART });
  };

  const handleClearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };
  return (
    <div className="cart-container">
      <header className="header">
        <Link to="/" className="back-button" onClick={handleNavigation}>
          ⬅️
        </Link>
        <h1>Your Cart</h1>
      </header>

      {cart.cartItems?.length === 0 ? (
        <p className="empty-message">Your cart is empty 🛍️</p>
      ) : (
        <>
          <div className="cart-content">
            <ProductGrid products={cart.cartItems} />
          </div>
          <div>
            {cart.cartItems?.length > 0 && (
              <div className="cart-footer">
                <p>
                  Total: <strong>${cart.totalPrice?.toFixed(2)}</strong>
                </p>
                <button onClick={handleClearCart}>❌ Clear cart </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
