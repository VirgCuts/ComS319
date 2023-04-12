import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Products from "./Products.json";
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
  const [query, setQuery] = useState(''); 
  const [totalCost, setTotalCost] = useState(0);

  //array of product amounts.
  const [counts, setCounts] = useState(Array(Products.length).fill(0));
  
  //increments value in counts array which holds a value equal to the amount of the item in the cart
  const addToCart = (product) => {
    if(!cart.includes(product)) {
    setCart([...cart, product]);
    }
    const index = Products.indexOf(product);
    setTotalCost(totalCost + product.price)
    setCounts(prevCount => {
      const newCount = [...prevCount];
      newCount[index]++;
      return newCount
    })
  };

  
//decrements value in counts array utilizes math.min to not go below 0 items
  const removeFromCart = (product) => {
    if(cart.includes(product) && counts[product.id-1]==1) {
    let givenSize = [...cart];
    givenSize = givenSize.filter((cartItem) => cartItem.id !== product.id);
    setCart(givenSize);
    }
    
    const index = Products.indexOf(product);
    if(!counts[index] == 0) {
      setTotalCost(totalCost - product.price)
    }
    setCounts(prevCount => {
      const newCount = [...prevCount];
      newCount[index] = Math.max(newCount[index] - 1, 0);
      return newCount
    })
  };


  //displays the items that have been added to the cart
  const cartItems = cart.map((el) => (
    <div id="cartContainer">
    <div key={el.id}>
    <img class="img-fluid" src={el.image} width={20} />
    <p>{el.title}</p> <p id="cartContainertext">Price: ${el.price} <br></br>Amount: {counts[el.id-1]} <br></br>Total Cost: ${(el.price * counts[el.id-1]).toFixed(2)}</p>
    </div>
    </div>
    ));
  
  useEffect(() => {
    setTotalCost(totalCost);
  }, []);
    
    

  //Handles the search currently doesnt fix itself when values are deleted
  const search = (e) => {
    setQuery(e.target.value);
    const results = Products.filter(eachProduct => {
    if (e.target.value === "") return cartTotal;
    return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setCartTotal(results);
    }


  /*
  *utilizes displayPage to determine pages to swap to if no page swaps have been called yet will initialize by checking if display page === 0
  *if true first sets catalog to display page as starting point is always catalog (needed in order to remove catalog). Then removes the catalog
  *and replaces it with page choice and assigns displayPage with said choice.  
  */
  let displayPage = 0;
  function pageSwap(pageNum){

    if(pageNum === 1 && displayPage == 0) {
      displayPage = document.getElementById("productCatalog");
    }
    else if (pageNum === 1){
      displayPage.style.display = "none";
      displayPage = document.getElementById("productCatalog");
      displayPage.style.display = "block";
    }

    if(pageNum === 2 && displayPage === 0) {
      displayPage = document.getElementById("productCatalog");
      displayPage.style.display = "none";
      displayPage = document.getElementById("cart");
      displayPage.style.display = "block";
    } 
    else if(pageNum ===2){
      displayPage.style.display = "none";
      displayPage = document.getElementById("cart");
      displayPage.style.display = "block";
    }

    if(pageNum ===3 && displayPage === 0){
      displayPage = document.getElementById("productCatalog");
      displayPage.style.display = "none";
      displayPage = document.getElementById("checkout");
      displayPage.style.display = "block";
    }
    else if(pageNum===3){
      displayPage.style.display = "none";
      displayPage = document.getElementById("checkout")
      displayPage.style.display = "block";
    }
  }
  /*
  *Renders the productCatalog in full, calls a map of the products and outputs variables of each also includes count for each
  *item which changes the value of the counts array at the index of the product, giving a total amount of product in the cart 
  *at the array index.
  */
const render_products = (ProductsCategory) => {
  return <div>
  <h2>Products ({ProductsCategory.length})</h2>
  <div style={{ maxHeight: '800px', overflowY:
  'scroll' }}>
  
  {/* Loop Products */}
  {ProductsCategory.map((product, index) => (
  <div key={index} class="grid-container">
  <div>
    <img alt="Product Image"src={product.image}/>
  </div>
  <div>
  <div>
  <h3>
  <a href={product.href}>
  <span aria-hidden="true"/>
  <span style={{ fontSize: '15px', fontWeight: '600' }}>{product.title}</span>
  </a>
  </h3>
  <p>Rating: {product.rating.rate}</p>
  </div>
  <p>${product.price}</p>
  <button onClick={()=> addToCart(product)}> + </button>
   <button onClick={()=> removeFromCart(product)}> - </button>
   <p>Count: {counts[product.id-1]}</p>
  </div>
  </div>
  ))}
  </div>
  </div>
  }
  
  const render_cart = (fullCart) => {
    
    return <div>
      <h2>Cart</h2>
      <p>{cartItems}</p>
      <div id="cartTaxTotal">
        <p>Tax: $5</p>
        <p>Total: ${totalCost.toFixed(2)}</p>
        <p>Total+Tax: ${(totalCost+5).toFixed(2)}</p>
      </div>
    </div>
  }
  const render_checkout = (fullCart) => {
    return <div>
      
<div class="row">
  <div class="col-2"></div>


  <div class="col-8">

    <h1>Javascript Form Validation</h1>

    <div id="liveAlertPlaceholder"></div>
    <form class="row g-3" id="checkout-form">
      <div class="col-md-6">
        <label for="inputName" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="inputName"></input>
        <div class="valid-feedback">
          Looks good!
        </div>
        <div class="invalid-feedback">
          Must be like, "John Doe"
        </div>
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4"></input>
        <div class="valid-feedback">
          Looks good!
        </div>
        <div class="invalid-feedback">
          Must be like, "abc@xyz.efg"
        </div>
      </div>

      <div class="col-12">
        <label for="inputCard" class="form-label">Card</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i class="bi-credit-card-fill"></i></span>
          <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"aria-label="Username" aria-describedby="basic-addon1"></input>
          <div class="valid-feedback">
            Looks good!
          </div>
          <div class="invalid-feedback">
            Must be like, "7777-7777-7777-7777"
          </div>
        </div>
      </div>

      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity"></input>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip"></input>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-success"> <i class="bi-bag-check"></i> Order</button>
      </div>
    </form>


    <div class="card collapse" style={{width: '18rem'}}>
      <div class="card-body">
        <h5 class="card-title">Order summary</h5>
        <p class="card-text">Here is a summary of your order.</p>
      </div>
      <ul class="list-group list-group-flush">

      </ul>
      <a href="" onclick="location.reload()" class="btn btn-secondary"> <i class="bi-arrow-left-circle"></i>
        Return</a>
    </div>


    <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
      <div class="container py-4 py-md-5 px-4 px-md-3">
        <div class="row">
          <div class="col-lg-12 mb-3">
            <b>SE/Com-S 319</b> Javascript form validation.
          </div>

        </div>
      </div>
    </footer>

  </div>

  <div class="col-2"></div>


</div>
    </div>
  }

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const form = document.getElementById('checkout-form')
  const inputCard = document.querySelector('#inputCard')
  const alertTrigger = document.getElementById('submit-btn')
  const summaryCard = document.querySelector('.card')
  const summaryList = document.querySelector('.card > ul')

  var order = { name: '', 
  email: '', 
  card: '' }

  const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    ` <div>${message}</div>`,
    ' <button type="button" class="btn-close" data-bs-dismiss="alert" arialabel="Close"></button>',
    '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
    }





  /*
  *Rendered Page sent to HTML
  */
  return (
    <div>
    <div style={{ minWidth: '65%' }}>
    <div>
    <h1> Product Catalog App </h1>
    <input type="search" value={query} onChange={search}/>
  <button onClick={()=> pageSwap(1)}> Catalogue </button>
  <button onClick={()=> pageSwap(2)}> Cart </button>
  <button onClick={()=> pageSwap(3)}> Checkout </button>
    <p>
    <b style={{ color: 'teal' }}>Carter Cutsforth and Keenan Jacobs</b>
    </p>
    </div>
    </div>
    <div id="productCatalog">
    {render_products(cartTotal)}
    </div>
    <div id="cart">
      {render_cart(cart)}
    </div>
    <div id="checkout">
      {render_checkout(cart)}
    </div>
    </div>
    );

  }



  //Add your code under this line
  
  
  