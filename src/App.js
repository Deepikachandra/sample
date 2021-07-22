import React, {useEffect, useState} from 'react';
import './App.css';
import Header from'./Components/Header';
import Home from'./Components/Home';
import Products from'./Components/Products';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  const [cartItem, setCartItem] = useState(0);
  if(cartItem!==0) localStorage.setItem("cartItem",cartItem);
  
  useEffect(() => {
    if(localStorage.getItem("cartItem")) setCartItem(localStorage.getItem("cartItem"))
  },[cartItem])

  return (
    <div className="App">
    <Header cartItem={cartItem}/>
    <Home />
    <Products cartItem={cartItem} setCartItem={setCartItem}/>
    </div>
  );
}

export default App;
