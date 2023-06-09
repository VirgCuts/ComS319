import { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [viewer2, setViewer2] = useState(false);
  const [viewer3, setViewer3] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [index, setIndex] = useState(0);

  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
      setViewer2(!viewer2);
    } else {
      console.log("Wrong number of Product id.");
    }
  }

  const showOneItem = oneProduct.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={30} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rate :{el.rating.rate} and Count:{el.rating.count} <br />
    </div>
  ));

  function getAllProducts() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }

  const showAllItems = product.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={30} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rate :{el.rating.rate} and Count:{el.rating.count} <br />
    </div>
  ));

  // new Product
  const [addNewProduct, setAddNewProduct] = useState({
    _id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:4000/images/",
    rating: { rate: 0.0, count: 0 },
  });

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: value });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: value });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({ ...addNewProduct, rating: { rate: value } });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: value },
      });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }

  function getOneByOneProductNext() {
    if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function getOneByOneProductPrev() {
    if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:4000/delete/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
    setChecked4(!checked4);
  }

  function updatePricing(newPrice) {
    var productId = document.getElementById("updateIDinput").value;
    fetch("http://localhost:4000/put/", {
      method: "PUT",
      
    });
  }

  function hideView(item) {
    var element = document.getElementById(item);
    var showAll = document.getElementById("ShowAllAvail");
    var showOne = document.getElementById("ShowOneProd");
    var upProd = document.getElementById("updateProduct");
    var addProd = document.getElementById("addProduct");
    var delProd = document.getElementById("deleteProduct");
    if(element.style.display == "none") {
      //lazy way around only showing one element this looks ugly

      showAll.style.display = "none";
      showOne.style.display = "none";
      upProd.style.display = "none";
      addProd.style.display = "none";
      delProd.style.display = "none";
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
    
  }

  return (
    <div id="div">
      <div id="box">

      <div id="CatofProd">
      <h1>Catalog of Products</h1>
      <span id="gridButton4">

      <button onClick={() => hideView("ShowAllAvail")}>Show All Available Products</button>
      <button onClick={() => hideView("ShowOneProd")}>Show Product by Id</button>
      <button onClick={() => hideView("updateProduct")}>Update Product Price</button>
      <button onClick={() => hideView("addProduct")}>Add a Product</button>
      <button onClick={() => hideView("deleteProduct")}>Delete a Product</button>
      </span>
      </div>
      </div>

      <hr class="b-example-divider"></hr>
      <div id= "ShowAllAvail">
      <div id="box" name="ShowAllAvail">
      <h1>Show all available Products.</h1><button onClick={() => getAllProducts()}>Show All products</button>

      {viewer1 && <div>Products {showAllItems}</div>}
      </div>
      </div>
      
      
      <div id="ShowOneProd">
      <div id="box">
      <h1>Show one Product by Id:</h1>
      <input
          type="text"
          id="message"
          name="message"
          placeholder="id"
          onChange={(e) => getOneProduct(e.target.value)}
        />
      {viewer2 && <div>Product: {showOneItem}</div>}
      </div>
      </div>
  

      <div id= "updateProduct">
      <div id="box">
        <h3>Update a product:</h3>

        <form action="" id="gridButton2">
          <input
            type="text"
            id="updateIDinput"
            name="message"
            placeholder="id"
            onChange={(e) => getOneProduct(e.target.value)}
          />

          {viewer2 && <div>Product: {showOneItem}</div>}

          <input
            type="text"
            id="message"
            name="message"
            placeholder="Update Price"
            onChange={(e) => updatePricing(e.target.value)}
          />
          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
        </form>
      </div>
      </div>
      <div id="addProduct">
      <div id="box">
      <span id="newProduct">
        <h3>Add a new product :</h3>

        <form action="" id="gridButtons">
          ID
          <input
            type="number"
            placeholder="ID"
            name="_id"
            value={addNewProduct._id}
            onChange={handleChange}
          />
          Title
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={addNewProduct.title}
            onChange={handleChange}
          />
          Price
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={addNewProduct.price}
            onChange={handleChange}
          />
          Description
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={addNewProduct.description}
            onChange={handleChange}
          />
          Category
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={addNewProduct.category}
            onChange={handleChange}
          />
          Image
          <input
            type="text"
            placeholder="Image"
            name="image"
            value={addNewProduct.image}
            onChange={handleChange}
          />
          Rate
          <input
            type="number"
            placeholder="Rate"
            name="rate"
            value={addNewProduct.rating.rate}
            onChange={handleChange}
          />
          Count
          <input
            type="number"
            placeholder="Count"
            name="count"
            value={addNewProduct.rating.count}
            onChange={handleChange}
          />
        </form>
        <button type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </span>
      </div>
      </div>



      <div id="deleteProduct">
      <div id="box">
      <h3>Delete one product:</h3>
      <span id="gridButton3">
        <input
          type="checkbox"
          id="acceptdelete"
          name="acceptdelete"
          checked={checked4}
          onChange={(e) => setChecked4(!checked4)}
        />

        <button onClick={() => getOneByOneProductPrev()}>Prev</button>
        <button onClick={() => getOneByOneProductNext()}>Next</button>
        <button onClick={() => deleteOneProduct(product[index]._id)}>
          Delete
        </button>
      </span>
      </div>
      {checked4 && (
        <div key={product[index]._id}>
          <img src={product[index].image} width={30} /> <br />
          Id:{product[index]._id} <br />
          Title: {product[index].title} <br />
          Category: {product[index].category} <br />
          Price: {product[index].price} <br />
          Rate :{product[index].rating.rate} and Count:
          {product[index].rating.count} <br />
        </div>
      )}
    </div>
    </div>
  );
} // App end

export default App;
