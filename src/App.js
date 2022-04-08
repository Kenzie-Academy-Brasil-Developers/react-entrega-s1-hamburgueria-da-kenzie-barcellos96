import "./App.css";
import logoKenzie from "../src/assets/logo-kenzie.png";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList/index.jsx";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filteredProd = products.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
  );

  function handleClick(productId) {
    const itemExist = products.find((item) => item.id === productId);

    if (!currentSale.includes(itemExist)) {
      setCurrentSale([...currentSale, itemExist]);
    }
  }

  function removeItem(itemId) {
    setCurrentSale(currentSale.filter((item) => item.id !== itemId));
  }

  return (
    <div className="App">
      <header className="header-app">
        <img
          src={logoKenzie}
          alt="logo hambuergueria kenzie"
          className="img-header"
        />
        <div className="input-group">
          <input
            className="input-app-header"
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>
      </header>

      <ProductList filteredProd={filteredProd} handleClick={handleClick} />
      <Cart
        currentSale={currentSale}
        removeItem={removeItem}
        setCurrentSale={setCurrentSale}
      />
    </div>
  );
}

export default App;
