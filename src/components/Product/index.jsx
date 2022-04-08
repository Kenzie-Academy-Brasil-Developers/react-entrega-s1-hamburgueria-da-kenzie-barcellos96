import "./styles.css";

function Product({ product, handleClick }) {
  const price = product.price;
  const formatPrice = `R$${price.toLocaleString("pt-br", {
    styles: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })}`;

  return (
    <section className="list">
      <div className="div-img">
        <img src={product.img} alt="img-item" className="img-item" />
      </div>

      <span className="item-name">{product.name}</span>
      <section className="item-category">{product.category}</section>
      <section className="item-price">{formatPrice}</section>
      <button
        className="btn-add"
        onClick={() => {
          handleClick(product.id);
        }}
      >
        Adicionar
      </button>
    </section>
  );
}

export default Product;
