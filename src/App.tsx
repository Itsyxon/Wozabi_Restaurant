import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dishes from './components/Dishes/Dishes';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './context/CartProvider';

function App() {

  const [cartIsVisible, setCartisVisible] = useState<boolean>(false)

  const showCartHandler = () => {
    setCartisVisible(true)
  }

  const hideCartHandler = () => {
    setCartisVisible(false)
  }
  return (

    <div className="app">
      <CartContextProvider>
        {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Dishes />
        </main>
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
