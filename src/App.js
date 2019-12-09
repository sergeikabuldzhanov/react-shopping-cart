import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import useLocalStorage from './hooks/useLocalStorage';

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = item => {
    const productIsInCart = cart.find(product => product.id == item.id);
    const currentNumberInCart = productIsInCart
      ? productIsInCart.numberInCart+1
	  : 1;
    setCart([...cart, { ...item, numberInCart: currentNumberInCart }]);
  };

  const removeItem = index => {	  	  
    setCart(cart.filter((cartElement, i)=> i!=index));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{cart, removeItem}}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
