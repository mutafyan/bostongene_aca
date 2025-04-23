import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  );
};

export default ProductGrid;
