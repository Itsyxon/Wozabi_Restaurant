import React, { useContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dishes from './components/Dishes/Dishes';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {

  const [cartIsVisible, setCartisVisible] = useState<boolean>(false)

  const showCartHandler = () => {
    setCartisVisible(true)
  }

  const hideCartHandler = () => {
    setCartisVisible(false)
  }

  const CartUseContext = useContext(CartContext)

  return (
    <CartContext.Provider value={CartUseContext}>
      <div className="app">
        {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>

          <Dishes />
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
