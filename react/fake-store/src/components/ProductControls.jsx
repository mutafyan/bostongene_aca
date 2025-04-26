import { useCart } from "../context/CartContext";

const ProductControls = ({ quantity, onAddToCart, onRemoveFromCart }) => {

  return quantity === 0 ? (
    <button onClick={onAddToCart}>➕ Add to cart</button>
  ) : quantity === 1 ? (
    <div className="quantity-controls">
      <button onClick={onRemoveFromCart}>🗑️ Remove from cart</button>
      <button onClick={onAddToCart}>➕</button>
    </div>
  ) : (
    <div className="quantity-controls">
      <button onClick={onRemoveFromCart}>➖</button>
      <span>{quantity}</span>
      <button onClick={onAddToCart}>➕</button>
    </div>
  );
};
export default ProductControls;
