import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandlert = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandlert} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
