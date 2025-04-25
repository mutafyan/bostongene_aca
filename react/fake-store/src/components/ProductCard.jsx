import { useCart } from "../context/CartContext";
import { ACTIONS } from "../context/cartReducer";
import "../styles/ProductCard.css";

const ProductCard = ({ product, isCart }) => {
  const { title, image, price, rating } = product;
  const { cart, dispatch } = useCart();

  const cartItem = cart.cartItems?.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    console.log(quantity);
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: product });
  };
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <strong>${price}</strong>
      </p>
      <p>
        ⭐<strong>{rating.rate}</strong> ({rating.count} ratings)
      </p>

      {quantity === 0 ? (
        <button onClick={handleAddToCart}>➕ Add to cart</button>
      ) : quantity === 1 && isCart ? (
        <button onClick={handleRemoveFromCart}>🗑️ Remove from cart</button>
      ) : (
        <div className="quantity-controls">
          <button onClick={handleRemoveFromCart}>➖</button>
          <span>{quantity}</span>
          <button onClick={handleAddToCart}>➕</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
