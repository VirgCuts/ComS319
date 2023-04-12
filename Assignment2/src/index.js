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


//Renders Every Products Image
export function ListProducts() {

  const [counter,setCounter] = useState(0);

const subtractCounter = () => {
  if(0 < counter) {
    setCounter(counter-1);
  }}

 
  const [ProductsCategory, setProductsCategory] = useState(Products); 
  return <div>

  {ProductsCategory.map((product, index) => (
    
<div key={index} >
  <img alt="Product Image" src={product.image} />
  <p>{product.description}</p>
  
<div>
  <h1>Counter: {counter}</h1>

  <button onClick={()=>setCounter(counter+1)}>
  +
  </button>
  <button onClick={subtractCounter}>
  -
  </button>
</div>
</div>
  ))}
  </div>
  }



 
function Counter(){
const [counter,setCounter] = useState(0);

const subtractCounter = () => {
  if(0 < counter) {
    setCounter(counter-1);
  }
}
return(
<div>
<h1>Counter: {counter}</h1>

<button onClick={()=>setCounter(counter+1)}>
+
</button>
<button onClick={subtractCounter}>
-
</button>
</div>
)
}
