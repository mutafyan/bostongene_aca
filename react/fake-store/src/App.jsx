import "./App.css";
import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

const App = () => (
  <CartProvider>
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Routes>
  </CartProvider>
);

export default App;
