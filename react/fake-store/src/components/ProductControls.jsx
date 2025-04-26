import { useCart } from "../context/CartContext";

const ProductControls = ({ quantity, onAddToCart, onRemoveFromCart }) => {
  const { cart } = useCart();

  return quantity === 0 ? (
    <button onClick={onAddToCart}>➕ Add to cart</button>
  ) : quantity === 1 && cart.isOpen ? (
    <div style={{alignSelf: 'center'}}>
      <button onClick={onRemoveFromCart} style={{border: '1px'}}>🗑️ Remove from cart</button>
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
