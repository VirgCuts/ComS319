import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Products} from "./Products.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = 
ReactDOM.createRoot(document.getElementById('root'));

/*
*Renders the function change whatever is inbetween
*the React.StrictMode to render the function to the HTML
*/
root.render(
<React.StrictMode>
<ListProducts />
</React.StrictMode>
);


//Renders the catalogue of products needs values with a id,image,title,price,rating,description
export function ListProducts() {

  const[cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(Products); 
  //array of product amounts.
  const [counts, setCounts] = useState(Array(Products.length).fill(0));
  
  //increments value in counts array which holds a value equal to the amount of the item in the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    const index = Products.indexOf(product);
    setCounts(prevCount => {
      const newCount = [...prevCount];
      newCount[index]++;
      return newCount
    })
  };

//decrements value in counts array utilizes math.min to not go below 0 items
  const removeFromCart = (product) => {
    let givenSize = [...cart];
    givenSize = givenSize.filter((cartItem) => cartItem.id !== product.id);
    setCart(givenSize);
    const index = Products.indexOf(product);
    setCounts(prevCount => {
      const newCount = [...prevCount];
      newCount[index] = Math.max(newCount[index] - 1, 0);
      return newCount
    })
  };
  
  
  //used in debugging shows items at bottom
  const cartItems = cart.map((product) => (
<div key={product.id}>
<img class=
"img-fluid" src={product.image} width={30} />
{product.title}
${product.price}
</div>
));

  return <div>

  {cartTotal.map((product, index) => (
    
<div key={index} class="grid-container" >
<div class = "grid-item">
  <img alt="Product Image" src={product.image} />
  <p>{product.title}</p>
  <p>${product.price}</p>
  
  <button onClick={()=> addToCart(product)}> + </button>
  <button onClick={()=> removeFromCart(product)}> - </button>
  <p>Count: {counts[product.id-1]}</p>
</div>
</div>
  ))}
  <div>{cartItems}</div>
  </div> 
  }

