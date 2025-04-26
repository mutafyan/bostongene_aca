import { useCart } from "../context/CartContext";
import { ACTIONS } from "../context/cartReducer";
import "../styles/ProductCard.css";
import ProductControls from "./ProductControls";

const ProductCard = ({ product }) => {
  const { title, image, price, rating } = product;
  const { cart, dispatch } = useCart();

  const cartItem = cart.cartItems?.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
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

      <ProductControls
        quantity={quantity}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default ProductCard;
