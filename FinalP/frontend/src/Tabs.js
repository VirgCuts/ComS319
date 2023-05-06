import "./Tabs.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

export var changePage = 3;

function swapPages(pageNum) {
  if(pageNum === 1) {
    changePage = 1;
  }
  else if (pageNum === 2) {
    changePage = 2;
  }
  else if (pageNum === 3) {
    changePage = 3;
  }
  else if (pageNum === 4) {
    changePage = 4;
  }
  else if (pageNum === 5) {
    changePage = 5;
  }
}

export function AboutUs(props) {
  const logo= props.image1;
  const rob = props.image11;
  const placeholder = props.image9;
  const residentialRemodel = props.image10;
  const bearingRemoval = props.image2;
  return (
    //     <html>
    //       <head>
    //         <link
    //           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
    // alpha1/dist/css/bootstrap.min.css"
    //           rel="stylesheet"
    //           integrity="sha384-
    // GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    //           crossOrigin="anonymous"
    //         ></link>
    //         <title>HomePage</title>
    //       </head>
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
          <img src = {logo} width={"100px"} height={"100px"}></img>
          </a>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link" href="Home" onclick={"changePage(1)"}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="About Us" onclick="changePage(2)"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>
            </ul>
            <form role="search"></form>
          </div>
        </div>
      </nav>
      <hr className="featurette-divider"></hr>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            The story <span className="text-muted">of ROBERT</span>
          </h2>
          <p className="lead">
            &nbsp;&nbsp; Robert Clifton graduated from Iowa State University
            with a bachelor's degree in Civil Engineering and specializes in
            structural engineering. Rob is originally from Winterset, Iowa and
            now lives in Ankeny, Iowa. In his spare time, he enjoys hunting,
            golfing, and spending time with his wife and daughter. He has worked
            on a wide variety of projects, including residential and commercial.
            His experience includes K-12 buildings, university buildings, office
            buildings, churches, home additions and modifications, and more.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={rob}
            width="500px"
            height="500px"
          ></img>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      <div className="row" id="padding">
        <div className="col-lg-4">
          
            <img
              src={placeholder}
              width="200px"
              height="200px"
              id="imageCircles"
            ></img>
          
          <h2 className="fw-normal">Past Jobs</h2>
          <p>Lorem Epsum</p>
        </div>
        <div className="col-lg-4">
          
            <img
              src={residentialRemodel}
              width="200px"
              height="200px"
              id="imageCircles"
            ></img>
          
          <h2 className="fw-normal">PLACEHOLDER</h2>
          <p>Lorem Epsum</p>
        </div>
        <div className="col-lg-4">
          
            <img
              src={bearingRemoval}
              width="200px"
              height="200px"
              id="imageCircles"
            ></img>
         
          <h2 className="fw-normal">PLACEHOLDER</h2>
          <p>Lorem Epsum</p>
        </div>
      </div>
      <footer>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="index.html" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="AboutUs.html" className="nav-link px-2 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link px-2 text-muted">
                  Services
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">
              Copyright &copy; 2023 Clifton Structural - All Rights Reserved.
            </p>
            <p className="text-center text-muted">Need a Consultation?</p>
            <p className="text-center text-muted">Phone: 515-468-1480 </p>
            <p className="text-center text-muted">
              Email:{" "}
              <a href="Mailto:Rob@cliftonstructural.com">
                Rob@cliftonstructural.com
              </a>
            </p>
          </footer>
        </div>
      </footer>
    </div>
    // </html>
  );
}

export function Index(props) {
  const logo= props.image1;
  const rob = props.image11;
  const services = props.image8;
  const call = props.image4;
  return (
    //     <html>
    //       <head>
    //         <link
    //           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
    // alpha1/dist/css/bootstrap.min.css"
    //           rel="stylesheet"
    //           integrity="sha384-
    // GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    //           crossOrigin="anonymous"
    //         ></link>
    //         <title>HomePage</title>
    //       </head>
    <div>
      <section>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-
w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script>
        <script src="code.js"></script>
      </section>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              
              <img src = {logo} width={"100px"} height={"100px"}></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aboutus.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
              </ul>
              <form role="search"></form>
            </div>
          </div>
        </nav>
      </header>

      <main id="homeData"></main>

      <main>
        <div>
          <div>
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal" id="font50weight400">
                {" "}
                Structural Engineering{" "}
              </h1>
              <p className="lead fw-normal" id="italics25px">
                {" "}
                Clifton Structural takes pride in responsiveness. Rob
                understands your time is valuable and will provide a design to
                fit your residential or commercial engineering needs.
                Deliverables include structural engineering construction
                documents and structural calculations.
              </p>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>
        </div>

        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <p className="display-5 fw-bold" id="pointfont25">
              <img
                src={rob}
                width="200px"
                height="200px"
                id="imageCircles"
              ></img>{" "}
            </p>
            <p className="hometext">
              {" "}
              Robert Clifton graduated from Iowa State University with a
              bachelor's degree in Civil Engineering and specializes in
              structural engineering. Rob is originally from Winterset, Iowa and
              now lives in Ankeny, Iowa. In his spare time, he enjoys hunting,
              golfing, and spending time with his wife and daughter.
            </p>
            <button
              onClick={() => (window.location.href = "aboutus.html")} //Don't think this actually works
              className="btn btn-primary btn-lg"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </main>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <p className="display-5 fw-bold" id="pointfont25">
              <img
                src={services}
                width="200px"
                height="200px"
                id="imageCircles"
              ></img>{" "}
            </p>
            <p>
              {" "}
              Our services include various commercial and residential
              consultation and design
            </p>
            <button
              onClick={() => (window.location.href = "services.html")} //Don't think this actually works
              className="btn btn-primary btn-lg"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </main>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <p className="display-5 fw-bold" id="pointfont25">
              <img
                src={call}
                width="200px"
                height="200px"
                id="imageCircles"
              ></img>{" "}
            </p>
            <p>
              Phone Number: 515-468-1480 Email:{" "}
              <a href="Rob@cliftonstructural.com">Rob@cliftonstructural.com</a>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="index.html" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="AboutUs.html" className="nav-link px-2 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link px-2 text-muted">
                  Services
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">
              Copyright &copy; 2023 Clifton Structural - All Rights Reserved.
            </p>
            <p className="text-center text-muted">Need a Consultation?</p>
            <p className="text-center text-muted">Phone: 515-468-1480 </p>
            <p className="text-center text-muted">
              Email:{" "}
              <a href="Mailto:Rob@cliftonstructural.com">
                Rob@cliftonstructural.com
              </a>
            </p>
          </footer>
        </div>
      </footer>
    </div>
    // </html>
  );
}

export function Services(props) {
  const logo = props.image1;
  return (
    //     <html>
    //       <head>
    //         <link
    //           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
    // alpha1/dist/css/bootstrap.min.css"
    //           rel="stylesheet"
    //           integrity="sha384-
    // GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    //           crossOrigin="anonymous"
    //         ></link>
    //         <title>HomePage</title>
    //       </head>
    <div>
      <section>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
    alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-
    w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script>
        <script src="./code.js"></script>
      </section>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src={logo}
                width="100px"
                height="100px"
                alt="logo"
              ></img>
            </a>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aboutus.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="services.html"
                  >
                    Services
                  </a>
                </li>
              </ul>
              <form role="search"></form>
            </div>
          </div>
        </nav>
      </header>

      <div id="myData">
        <div id="myProduct"></div>
      </div>

      <main>
        <p id="services">
          &nbsp;&nbsp;&nbsp;Below is a summary of the structural engineering
          services we offer in Iowa.Please contact us for a free consultation to
          understand your specific needs.
        </p>
        <div className="col-lg-8 mx-auto p-4 py-md-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h1 id="textDeco">Commercial</h1>
              <ul className="icon-list ps-0"></ul>
              <li>
                <h2>Building Design</h2>
                <p>
                  We work with architects and owners to provide gravity and
                  lateral systems to support the design intent.
                </p>
              </li>
              <li>
                <h2>Construction Engineering</h2>
                <p>
                  We work with contractors to provide construction phase
                  solutions, such as temporary shoring and verification of
                  construction loading conditions.
                </p>
              </li>
              <li>
                <h2>Steel Connection Design</h2>
              </li>
              <ul className="icon-list ps-0">
                We work with contractors to provide construction phase
                solutions, such as temporary shoring and verification of
                construction loading conditions.
              </ul>
            </div>

            <div className="col-md-6">
              <h1 id="textDeco">Residential</h1>
              <h2>Residential Consultation</h2>
              <p>
                We work with homeowners and their contractors to provide
                engineering solutions for home additions and modifications.
              </p>
              <ul className="icon-list ps-0"></ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="index.html" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="AboutUs.html" className="nav-link px-2 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link px-2 text-muted">
                  Services
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">
              Copyright &copy; 2023 Clifton Structural - All Rights Reserved.
            </p>
            <p className="text-center text-muted">Need a Consultation?</p>
            <p className="text-center text-muted">Phone: 515-468-1480 </p>
            <p className="text-center text-muted">
              Email:{" "}
              <a href="Mailto:Rob@cliftonstructural.com">
                Rob@cliftonstructural.com
              </a>
            </p>
          </footer>
        </div>
      </footer>
    </div>
    // </html>
  );
}

export function StudentInfo(props) {
  const { images } = props;
  return (
    // <html>
    //   <head>
    //     <link
    //       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    //       rel="stylesheet"
    //       integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    //       crossOrigin="anonymous"
    //     />
    //     <title>HomePage</title>
    //   </head>

    <div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
      <script src="./code.js" />
      <div>
        <p>
          SE/ComS319 Construction of User Interfaces, Spring 2023 <br />
          March, 11th 2023 <br />
          Carter Cutsforth: cvcuts@iastate.edu <br />
          Keenan Jacobs: kcjacobs@iastate.edu <br />
        </p>
      </div>
    </div>
    // </html>
  );
}
