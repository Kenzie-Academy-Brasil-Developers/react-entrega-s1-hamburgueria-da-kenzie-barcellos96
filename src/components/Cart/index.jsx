import "./styles.css";
import CartProd from "../CartProd/index.jsx";

function Cart({ currentSale, removeItem, setCurrentSale }) {
  const total = currentSale.reduce(
    (acc, currentValue) => (acc += currentValue.price),
    0
  );
  const totalPrice = `R$${total.toLocaleString("pt-br", {
    styles: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })}`;
  return (
    <div className="cart-list">
      <header className="header-cart">Carrinho de compras</header>
      {currentSale.length === 0 ? (
        <section className="bag-itens">
          <span className="bag-span">Sua sacola está vazia</span>
          <p className="bag-p">Adicione itens</p>
        </section>
      ) : (
        <div className="div-contartiner-cart">
          <div>
            {currentSale.map((item, index) => (
              <CartProd item={item} key={index} removeItem={removeItem} />
            ))}
          </div>
          <div className="section-total-price">
            Total:
            <div className="section-price">{totalPrice}</div>
          </div>
          <button className="btn-remove-all" onClick={() => setCurrentSale([])}>
            Remover todos
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
