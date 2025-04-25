import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products=[], isCart=false }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} isCart={isCart}/>
      })}
    </div>
  );
};

export default ProductGrid;
