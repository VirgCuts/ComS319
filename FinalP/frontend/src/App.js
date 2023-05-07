import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import {
  StudentInfo,
  Index,
  AboutUs,
  Services,
  Footer,
  Taskbar,
  page,
} from "./Tabs";
import { Route, Routes } from "react-router-dom";
function App() {

    const [product, setProduct] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
    const [viewer1, setViewer1] = useState(false);
    const [viewer2, setViewer2] = useState(false);
    const [viewer4, setViewer4] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [index, setIndex] = useState(0);
    const  [messageChange, setMessageChange] = useState();  
    // new Product
    const [addNewProduct, setAddNewProduct] = useState({
      id: 0,
      name: "",
      request: ""
    });
  
    
    function getAllProducts() {
      fetch("http://127.0.0.1:4000/api/get")
        .then((response) => response.json())
        .then((data) => {
          console.log("Show Catalog of Products :");
          console.log(data);
          setProduct(data);
        });
      setViewer1(!viewer1);
    }
  
    const showAllItems = product.map((el) => (
      <div key={el.id}>
        Name: {el.name} <br />
        Request {el.request} <br />
      </div>
    ));
  
    function getOneProduct(id) {
      console.log(id);
      if (id >= 1 && id <= 20) {
        fetch("http://127.0.0.1:4000/api/getFromId/" + id)
          .then((response) => response.json())
          .then((data) => {
            console.log("Show one product :", id);
            console.log(data);
            // const dataArr = [];
            // dataArr.push(data);
            setOneProduct(data);
          });
        setViewer2(!viewer2);
      } else {
        console.log("Wrong number of Product id.");
      }
    }
    async function getImageNameById(id) {
      try {
        const response = await fetch(`http://localhost:4000/api/getImageFromId/${id}`);
        const data = await response.json();
        return data[0].name;
      } catch (error) {
        console.error(error);
      }
    }
  
    function ImageComponent(id) {
    const [imageName, setImageName] = useState('');
  
    useEffect(() => {
      async function fetchData() {
        const name = await getImageNameById(id);
        setImageName(name);
      }
      fetchData();
    }, [id]);
    return imageName;
  }
  
    const showOneItem = oneProduct.map((el) => (
      <div key={el.id}>
        Name: {el.name} <br />
        Request: {el.request} <br />
      </div>
    ));
  
    function handleChange(evt) {
      const value = evt.target.value;
      if (evt.target.name === "id") {
        setAddNewProduct({ ...addNewProduct, id: value });
      } else if (evt.target.name === "name") {
        setAddNewProduct({ ...addNewProduct, name: value });
      } else if (evt.target.name === "request") {
        setAddNewProduct({ ...addNewProduct, request: value });
      }
    }
  
    function handleOnSubmit(e) {
      e.preventDefault();
      console.log(e.target.value);
      fetch("http://127.0.0.1:4000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addNewProduct),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Post a new product completed");
          console.log(data);
          if (data) {

            const value = Object.values(data);
            alert(value);
          }
        });
        window.location.reload();
      }

  function updateOneMessage(updateid) {
      fetch("http://127.0.0.1:4000/api/put", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({_id:updateid, message: messageChange}), 
    })
    .then((response) => response.json())
    .then((data) => {
      if(data) {
        const value = Object.values(data);
        alert(value);
      }
    });
    setChecked4(!checked4);
    
      }
    
    function deleteOneProduct(deleteid) {
      console.log("Product to delete :", deleteid);
      fetch("http://127.0.0.1:4000/api/delete/" + deleteid, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product[index]),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Delete a product completed : ", deleteid);
          console.log(data);
          if (data) {
            const value = Object.values(data);
            alert(value);
          }
        });
      setChecked4(!checked4);
      window.location.reload();
    }
    
    useEffect(() => {
      getAllProducts();
    }, []);
    useEffect(() => {
      getAllProducts();
    }, [checked4]);
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
    
    function catalogProducts() {
        return (
            <div>
            <div>
              <h3>Show all available Products.</h3>
              <button onClick={() => getAllProducts()}>Show All ...</button>
              {viewer1 && <div>Products {showAllItems}</div>}
            </div>
            <hr></hr>
            <div>
              <h3>Show one Request by Id:</h3>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="id"
                onChange={(e) => getOneProduct(e.target.value)}
              />
              {viewer2 && <div>Product: {showOneItem}</div>}
            </div>
            <hr></hr>
            <div>
              <h3>Add a new request :</h3>
              <form action="">
                <input
                  type="number"
                  placeholder="id?"
                  name="id"
                  value={addNewProduct.id}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Name?"
                  name="name"
                  value={addNewProduct.name}
                  onChange={handleChange}
                />
                <input
                  type="request"
                  placeholder="request?"
                  name="request"
                  value={addNewProduct.request}
                  onChange={handleChange}
                />
                <button type="submit" onClick={handleOnSubmit}>
                  {" "}
                  submit{" "}
                </button>
              </form>
            </div>

            <hr></hr>
          
          <form action="">
          <h3> Update your Message </h3>
          {viewer2 && <div>Message: {showOneItem}</div>}
          <input
            type="text"
            id="updateIDinput"
            name="message"
            placeholder="id"
            onChange={(e) => getOneProduct(e.target.value)}
          />

          <input
            type="text"
            id="message"
            name="message"
            placeholder="Update Message"
            onChange={(e) => updateOneMessage(e.target.value)}
          />
          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
        </form>
           
           
            <hr></hr>
            <div>
              <h3>Delete one product:</h3>
              <input
                type="checkbox"
                id="acceptdelete"
                name="acceptdelete"
                checked={checked4}
                onChange={(e) => setChecked4(!checked4)}
              />
              <button onClick={() => getOneByOneProductPrev()}>Prev</button>
              <button onClick={() => getOneByOneProductNext()}>Next</button>
              <button onClick={() => deleteOneProduct(product[index].id)}>
                Delete
              </button>
              {checked4 && (
                <div key={product[index].id}>
                  Id:{product[index].id} <br />
                  Name: {product[index].name} <br />
                  Request: {product[index].request} <br />
                </div>
              )}
            </div>
        </div>
        );
    }

  return (
    <>
      <Taskbar image1={ImageComponent(1)} />
      <div className="container">
        <Routes>
          <Route exact path="home" element={<Index image1={ImageComponent(1)} image11 = {ImageComponent(11)} image8 = {ImageComponent(8)} image4 = {ImageComponent(4)}/>} />
          <Route path="aboutus" element={<AboutUs image1={ImageComponent(1)} image11 = {ImageComponent(11)} image9 = {ImageComponent(9)} image10 = {ImageComponent(10)} image2 = {ImageComponent(2)}/>} />
          <Route path="services" element={<Services image1={ImageComponent(1)} image2={ImageComponent(2)} image3={ImageComponent(3)} image5={ImageComponent(5)} image6={ImageComponent(6)} image9={ImageComponent(9)} image10={ImageComponent(10)} />} />
          <Route path="contactus" element={catalogProducts()} />s
        </Routes>


        </div>
    
        {Footer()}
      </>
    );
  }

  export default App;