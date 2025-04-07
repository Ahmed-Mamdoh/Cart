import './App.css'
import Navbar from './components/Navbar';
import Items from './components/Items';
import { useState } from 'react';


function App() {

  const [products] = useState([
    { id: 1, name: "chipsy", price: 100, count: 1 },
    { id: 2, name: "pepsi", price: 200, count: 1 },
    { id: 3, name: "cigartes", price: 300, count: 1 },
    { id: 4, name: "baneh", price: 400, count: 1 },
  ]);

  const [addedProducts, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 1 },
    { id: 2, name: "pepsi", price: 200, count: 1 },
    { id: 3, name: "cigartes", price: 300, count: 1 },
    { id: 4, name: "baneh", price: 400, count: 1 },
  ]);

  const [theme, setTheme] = useState(true);

  const increment = (id) => {
    const updatedProducts = addedProducts.map((item) => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  const decrement = (id) => {
    const updatedProducts = addedProducts.map((item) => {
      if (item.id === id) {
        item.count = Math.max(1, item.count - 1);
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  const remove = (id) => {
    const updatedProducts = addedProducts.filter((item) => item.id !== id)
    setProducts(updatedProducts);
  };

  const reset = () => {
    const updatedProducts = products.map((item) => { return { ...item } });
    setProducts(updatedProducts);
  };

  const empty = () => {
    setProducts([]);
  };

  const total = () => {
    let total = 0;
    addedProducts.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  const add = (id) => {
    if (addedProducts.find((item) => item.id === id)) {
      increment(id);
      return
    }

    let wantedItem = products.find((item) => {
      return (item.id === id);
    });
    setProducts([...addedProducts, {...wantedItem}]); // Create new copy using spread
  };

  const ToggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <Navbar numOfProducts={addedProducts.length} total={total} theme={theme} add={add} />
      <Items addedProducts={addedProducts} increment={increment} decrement={decrement} remove={remove}
        reset={reset} empty={empty} total={total} ToggleTheme={ToggleTheme} theme={theme} numOfProducts={addedProducts.length}
      />
    </>
  )
}

export default App
