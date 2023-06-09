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
  const [viewer1, setViewer1] = useState(true);
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
    <div key={el.id} className="table100-body js-pscroll ps ps--active-y">
      <table>
        <tbody>
          <tr className="row100 body">
            <td className="cell100 column1">{el.id}</td>
            <td className="cell100 column2">{el.name}</td>
            <td className="cell100 column3">{el.request}</td>
          </tr>
        </tbody>
      </table>
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
    <div key={el.id} className="table100-body js-pscroll ps ps--active-y">
      <table>
        <tbody>
          <tr className="row100 body">
            <td className="cell100 column1">{el.id}</td>
            <td className="cell100 column2">{el.name}</td>
            <td className="cell100 column3">{el.request}</td>
          </tr>
        </tbody>
      </table>
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
                action=""
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        placeholder=""
                        name="id"
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
                        name="name"
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
                        name="request"
                        value={addNewProduct.request}
                        onChange={handleChange}
                        className="form-control md-textarea"
                      />
                      <label htmlFor="request" className="p-2">
                        Your message
                      </label>
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
        <div className="b-example-divider"></div>
        <div className="spacer"></div>
        <h3 className="mt-4">Show All Requests</h3>
        <div className="mt-4 mb-4">
          <button
            className="btn btn-primary btn-lg "
            onClick={() => getAllProducts()}
          >
            Show All
          </button>
          {viewer1 && (
            <div className="table100 ver1 m-b-100 m-2">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">ID</th>
                      <th className="cell100 column2">Name</th>
                      <th className="cell100 column3">Request</th>
                    </tr>
                  </thead>
                </table>
              </div>{" "}
              {showAllItems}
              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabIndex="0"
                  style={{ left: "0px", width: "0px" }}
                ></div>
              </div>
              <div
                className="ps__rail-y"
                style={{ top: "0px", height: "585px", right: "5px" }}
              >
                <div
                  className="ps__thumb-y"
                  tabIndex="0"
                  style={{ top: "0px", height: "293px" }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div className="b-example-divider"></div>
        <div className="spacer"></div>
        <h3 className="mt-4">Show Request by ID</h3>
        <div className="mt-4 mb-4">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                ID
              </span>
            </div>
            <input
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="number"
              id="message"
              name="message"
              placeholder=""
              onChange={(e) => getOneProduct(e.target.value)}
            />
          </div>
          {viewer2 && (
            <div className="table100 ver1 m-b-100 m-2">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">ID</th>
                      <th className="cell100 column2">Name</th>
                      <th className="cell100 column3">Request</th>
                    </tr>
                  </thead>
                </table>
              </div>
              {showOneItem}
            </div>
          )}
        </div>

        <div className="b-example-divider"></div>
        <div className="spacer"></div>
          <h3 className="mt-4">Update Request</h3>
        <form onSubmit={updateOneMessage} className="mt-4 mb-4">
          <div className="form-group p-2">
            <label for="formGroupExampleInput">ID</label>

            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              name="id"
              placeholder=""
              value={updateRequest.id}
              onChange={handleChangeUpdate}
              
            />
          </div>
          <div className="form-group p-2">
            <label for="formGroupExampleInput2">New Request</label>

            <textarea
              type="request"
              className="form-control md-textarea"
              name="request"
              id="formGroupExampleInput2"
              placeholder="Update Request"
              value={updateRequest.request}
              onChange={handleChangeUpdate}
            />
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>

        <div className="b-example-divider"></div>
        <div className="spacer"></div>
        <div className="mt-4 mb-4">
          <h3>Delete A Request:</h3>

          <input
            type="checkbox"
            id="acceptdelete"
            name="acceptdelete"
            className="p-2 m-2"
            checked={checked4}
            onChange={(e) => setChecked4(!checked4)}
          />
          <button
            onClick={() => getOneByOneProductPrev()}
            className="btn btn-primary m-2 p-2"
          >
            Prev
          </button>
          <button
            onClick={() => getOneByOneProductNext()}
            className="btn btn-primary m-2 p-2"
          >
            Next
          </button>
          <button
            onClick={() => deleteOneProduct(product[index].id)}
            className="btn btn-primary m-2 p-2"
          >
            Delete
          </button>
          {checked4 && (
            <div className="table100 ver1 m-b-100 m-2">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">ID</th>
                      <th className="cell100 column2">Name</th>
                      <th className="cell100 column3">Request</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table100-body js-pscroll ps ps--active-y">
                <table>
                  <tbody>
                    <tr className="row100 body">
                      <td className="cell100 column1">{product[index].id}</td>
                      <td className="cell100 column2">{product[index].name}</td>
                      <td className="cell100 column3">
                        {product[index].request}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
          <Route path="/studentinfo" element={<StudentInfo/>}/>
        </Routes>
      </div>

      {Footer()}
    </>
  );
}

export default App;
