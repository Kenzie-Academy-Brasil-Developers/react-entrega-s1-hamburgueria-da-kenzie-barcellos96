import "./styles.css";

function CartProd({ item, removeItem }) {
  console.log(item);
  return (
    <div className="container-cart-prod">
      <div className="div-img-cart-prod">
        <img src={item.img} alt="img" className="img" />
      </div>
      <div className="div-name-category">
        <span className="cart-prod-name">
          {item.name.length <= 15
            ? item.name
            : item.name.substring(0, 14) + "..."}
        </span>
        <section className="cart-prod-category">{item.category}</section>
      </div>

      <span className="remove-cart-prod" onClick={() => removeItem(item.id)}>
        Remover
      </span>
    </div>
  );
}

export default CartProd;
