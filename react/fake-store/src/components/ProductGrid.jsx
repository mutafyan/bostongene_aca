import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(({id, ...rest}) => (
        <ProductCard key={id} {...rest} />
      ))}
    </div>
  );
};

export default ProductGrid;
