import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { StudentInfo, Index, AboutUs, Services, Footer, Taskbar } from "./Tabs";
import { Route, Routes } from "react-router-dom";
//imports views from tabs and basically creates the view here to be rendered in index.js
//also handles all requests with the database
function App() {
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [viewer2, setViewer2] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [index, setIndex] = useState(0);
  const [updateRequest, setUpdateRequest] = useState({
    id: 0,
    request: "",
  });
  // new Product
  const [addNewProduct, setAddNewProduct] = useState({
    id: 0,
    name: "",
    request: "",
  });
  console.log(2);
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
      const response = await fetch(
        `http://localhost:4000/api/getImageFromId/${id}`
      );
      const data = await response.json();
      return data[0].name;
    } catch (error) {
      console.error(error);
    }
  }

  function ImageComponent(id) {
    const [imageName, setImageName] = useState("");

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

  function handleChangeUpdate(evt) {
    const { name, value } = evt.target;
    setUpdateRequest((prevState) => ({ ...prevState, [name]: value }));
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

  async function updateOneMessage(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:4000/api/update/${updateRequest.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateRequest),
        }
      );
      const data = await response.json();
      if (data) {
        const value = Object.values(data);
        alert(value);
      }
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
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
        <section className="mb-4 bg-light p-2 m-2">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        placeholder=""
                        id="id"
                        value={addNewProduct.id}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label htmlFor="id" className="p-2">
                        ID
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        placeholder=""
                        id="name"
                        value={addNewProduct.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label htmlFor="name" className="p-2">
                        Your Name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="request"
                        placeholder=""
                        id="request"
                        value={addNewProduct.request}
                        onChange={handleChange}
                        className="form-control md-textarea"
                      />
                      <label htmlFor="request" className="p-2">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <button type="submit" onClick={handleOnSubmit}>
                  {" "}
                  submit{" "}
                </button>  
              </div>
              <div className="status"></div>
            </div>
            
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>San Francisco, CA 94126, USA</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr></hr>
        
        <div>
          <h3>Show all available Products.</h3>
          <button onClick={() => getAllProducts()}>Show All ...</button>
          {viewer1 && <div>Products {showAllItems}</div>}
        </div>
        <hr></hr>
        <div>
          <h3>Show one Request by Id:</h3>
          <input
            type="number"
            id="message"
            name="message"
            placeholder="id"
            onChange={(e) => getOneProduct(e.target.value)}
          />
          {viewer2 && <div>Product: {showOneItem}</div>}
        </div>

        <hr></hr>

        <form onSubmit={updateOneMessage}>
          <h3> Update your Message </h3>
          {viewer2 && <div>Message: {showOneItem}</div>}
          <input
            type="number"
            id="updateIDinput"
            name="id"
            placeholder="id"
            value={updateRequest.id}
            onChange={handleChangeUpdate}
            className="form-control"
          />
          <label htmlFor="updateIDinput" className="p-2">
                        ID
                      </label>

          <textarea
            type="request"
            className="form-control md-textarea"
            name="request"
            id="request"
            placeholder="Update Request"
            value={updateRequest.request}
            onChange={handleChangeUpdate}
          />
          <label htmlFor="request" className="d-block p-2">
                        Change your request
                      </label>
          <button type="submit">submit</button>
        </form>

        <hr></hr>
        <div className="">
          <h3>Delete A Request:</h3>
          <input
            type="checkbox"
            id="acceptdelete"
            name="acceptdelete"
            className="p-2 m-2"
            checked={checked4}
            onChange={(e) => setChecked4(!checked4)}
          />
          <button onClick={() => getOneByOneProductPrev()} id ="triangle" className="p-2 m-2">Prev</button>
          <button onClick={() => getOneByOneProductNext()} id ="triangle" className="p-2 m-2">Next</button>
          <button onClick={() => deleteOneProduct(product[index].id)} className="p-2 m-2">
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
          <Route
            exact
            path="/"
            element={
              <Index
                image1={ImageComponent(1)}
                image11={ImageComponent(11)}
                image8={ImageComponent(8)}
                image4={ImageComponent(4)}
              />
            }
          />
          <Route
            path="/aboutus"
            element={
              <AboutUs
                image1={ImageComponent(1)}
                image11={ImageComponent(11)}
                image9={ImageComponent(9)}
                image10={ImageComponent(10)}
                image2={ImageComponent(2)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                image1={ImageComponent(1)}
                image2={ImageComponent(2)}
                image3={ImageComponent(3)}
                image5={ImageComponent(5)}
                image6={ImageComponent(6)}
                image9={ImageComponent(9)}
                image10={ImageComponent(10)}
              />
            }
          />
          <Route path="/contactus" element={catalogProducts()} />
        </Routes>
      </div>

      {Footer()}
    </>
  );
}

export default App;
