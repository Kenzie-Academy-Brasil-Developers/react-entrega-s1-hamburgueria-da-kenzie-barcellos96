import "./styles.css";
import Product from "../Product/index.jsx";

function ProductList({ handleClick, filteredProd }) {
  return (
    <div className="product-list">
      {filteredProd.map((product, index) => (
        <Product product={product} key={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default ProductList;
