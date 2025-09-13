import { useState } from 'react';
import Menu from './components/Menu.jsx';
import Banner from './components/Banner.jsx';
import Cart from './components/Cart.jsx';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems((prev) => [...prev, item]);
  const removeFromCart = (index) =>
    setCartItems((prev) => prev.filter((_, i) => i !== index));

  return (
    <>
      <Banner />
      <Menu addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </>
  );
}

export default App;
