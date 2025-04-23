// let resObj = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };

import { useCart } from '../context/CartContext';
import { ACTIONS } from '../context/cartReducer';
import '../styles/ProductCard.css';

const ProductCard = ({product}) => {
  const {
    title,
    description,
    image,
    price,
    rating,
  } = product;
  const { cart, dispatch} = useCart();
  const handleAddToCart = () => {
    dispatch({type: ACTIONS.ADD_TO_CART, payload: product})
    console.log("cart:", cart)
  }
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p><strong>${price}</strong></p>
      <p>⭐<strong>{rating.rate}</strong> ({rating.count} ratings)</p>
      <button onClick={handleAddToCart}>➕ Add to cart</button>
    </div>
  );
};

export default ProductCard;