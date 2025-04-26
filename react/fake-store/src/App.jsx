import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

const App = () => (
  <CartProvider>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="*" element={<HomeScreen />} />
    </Routes>
  </CartProvider>
);

export default App;
