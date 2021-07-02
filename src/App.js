import React, { useState} from 'react'
import Cart from './components/Cart/Cart';

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import CartProvider from './components/store/CartProvider';

function App() {
  const [cartIsShown, setCartisShown] = useState(false);
  const showCartHandler = () => {
    setCartisShown(true);
  }
  const hideCartHandler = () => {
    setCartisShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseChart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/> 
      </main>
    </CartProvider>
  );
}

export default App;
