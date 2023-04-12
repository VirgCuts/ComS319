import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Products} from "./Products.js";

const root = 
ReactDOM.createRoot(document.getElementById('root'));

/*
*Renders the function change whatever is inbetween
*the React.StrictMode to render the function to the HTML
*/
root.render(
<React.StrictMode>
<script />
</React.StrictMode>
);


//Renders Every Products Image
export function App() {
  console.log("Step 1 : After reading file :");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  return <div>
  {ProductsCategory.map((product, index) => (
  <div key={index} >
  <img alt="Product Image" src={product.image} />
  </div>
  ))}
  </div>
  }