import "./Tabs.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

import {Link, useMatch, useResolvedPath} from "react-router-dom";

export function AboutUs(props) {
  const logo = props.image1;
  const rob = props.image11;
  const placeholder = props.image9;
  const residentialRemodel = props.image10;
  const bearingRemoval = props.image2;
  return (
    <div>
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
          <img src={rob} width="500px" height="500px"></img>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
    </div>
  );
}

export function Index(props) {
  const logo = props.image1;
  const rob = props.image11;
  const services = props.image8;
  const call = props.image4;
  return (
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
      </main>
      <div className="container">
        <div className="row">
        <div className="col-md-4 text-center d-flex align-items-stretch">
        <div className="p-5 mb-4 bg-light rounded-3 d-flex flex-column ">
          <div className="container-fluid py-5">
            <p className="display-5 fw-bold" id="pointfont25">
              <img
                src={rob}
                width="200px"
                height="200px"
                className="rounded-circle"
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
            <ActiveLink  to="/services" className="btn btn-primary btn-lg" id="nolist"
              type="button">
              Learn More
            </ActiveLink>
            
          </div>
          </div>
        </div>

        <div className="col-md-4 text-center d-flex align-items-stretch">
          <div className="p-5 mb-4 bg-light rounded-3 d-flex flex-column">
            <div className="container-fluid py-5">
            
              <p className="display-5 fw-bold" id="pointfont25">
                <img
                  src={services}
                  width="200px"
                  height="200px"
                  className="rounded-circle"
                ></img>{" "}
              </p>
              <p>
                {" "}
                Our services include various commercial and residential
                consultation and design
              </p>
              <ActiveLink  to="/aboutus" className="btn btn-primary btn-lg" 
              type="button">
              Learn More
              </ActiveLink>
              
            </div>
            </div>
          </div>
        

          <div className="col-md-4 text-center d-flex align-items-stretch">
          <div className="p-5 mb-4 bg-light rounded-3 d-flex flex-column">
            <div className="container-fluid py-5">
              <p className="display-5 fw-bold" id="pointfont25">
                <img
                  src={call}
                  width="200px"
                  height="200px"
                  className="rounded-circle"
                ></img>{" "}
              </p>
              <p>
                Phone Number: 515-468-1480 Email:{" "}
                <a href="Rob@cliftonstructural.com">
                  Rob@cliftonstructural.com
                </a>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export function Services(props) {
  const logo = props.image1;
  const bearingRemoval1 = props.image2;
  const bearingRemoval2 = props.image3;
  const fireDamageIns1 = props.image5;
  const fireDamageIns2 = props.image6;
  const placeholder = props.image9;
  const residentialRemodel = props.image10;
  const serviceImages = document.querySelectorAll("#serviceImage");

  const ServiceImage = ({ src, title, id }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };

    const handleMouseLeave = () => {
      setShowTooltip(false);
    };

    return (
      <div style={{ display: "inline-block", position: "relative" }}>
        <img
          id={id}
          src={src}
          alt={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        {showTooltip && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "black",
              color: "white",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              zIndex: "9999",
            }}
          >
            {title}
          </div>
        )}
      </div>
    );
  };

  return (
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
      <main>
      
        <div className="col-lg-12 mx-auto p-4 py-md-5">
          <div className="row g-5">
            <div className="col-md-6 bg-light p-2 m-1">
              <h1  className="bg-light">Commercial</h1>
              <ul
                className="icon-list ps-0"
                style={{ listStyleType: "none" }}
              ></ul>
              <li style={{ listStyleType: "none" }}>
                <h2>Building Design</h2>
                <p>
                  We work with architects and owners to provide gravity and
                  lateral systems to support the design intent.
                </p>
                <div style={{ display: "flex" }}>
                  <ServiceImage
                    src={placeholder}
                    title="Placeholder Image"
                    id="serviceImage"
                  />
                  <ServiceImage
                    src={placeholder}
                    title="Placeholder Image"
                    id="serviceImage"
                  />
                  <ServiceImage
                    src={placeholder}
                    title="Placeholder Image"
                    id="serviceImage"
                  />
                </div>
              </li>
              <li style={{ listStyleType: "none" }}>
                <h2>Construction Engineering</h2>
                <p>
                  We work with contractors to provide construction phase
                  solutions, such as temporary shoring and verification of
                  construction loading conditions.
                </p>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <ServiceImage
                    src={bearingRemoval1}
                    title="Wall Bearing Removal"
                    id="serviceImage"
                  />
                  <ServiceImage
                    src={bearingRemoval2}
                    title="Wall Bearing Removal"
                    id="serviceImage"
                  />
                  <ServiceImage
                    src={placeholder}
                    title="Placeholder Image"
                    id="serviceImage"
                  />
                </div>
              </li>
              <li style={{ listStyleType: "none" }}>
                <h2>Steel Connection Design</h2>
              </li>
              <ul className="icon-list ps-0">
                We work with contractors to provide construction phase
                solutions, such as temporary shoring and verification of
                construction loading conditions.
              </ul>
              <div style={{ display: "flex" }}>
                <ServiceImage
                  src={placeholder}
                  title="Placeholder Image"
                  id="serviceImage"
                />
                <ServiceImage
                  src={placeholder}
                  title="Placeholder Image"
                  id="serviceImage"
                />
                <ServiceImage
                  src={placeholder}
                  title="Placeholder Image"
                  id="serviceImage"
                />
              </div>
            </div>

            <div className="col-md-5 bg-light p-2 m-1">
              <h1 id="textDeco">Residential</h1>
              <h2>Residential Consultation</h2>
              <p>
                We work with homeowners and their contractors to provide
                engineering solutions for home additions and modifications.
              </p>
              <div style={{ display: "flex" }}>
                <ServiceImage
                  src={residentialRemodel}
                  title="Remodel of Residential Home"
                  id="serviceImage"
                />
                <ServiceImage
                  src={fireDamageIns1}
                  title="Fire Damage Inspection"
                  id="serviceImage"
                />
                <ServiceImage
                  src={fireDamageIns2}
                  title="Fire Damage Inspection"
                  id="serviceImage"
                />
              </div>
              <ul className="icon-list ps-0"></ul>
            </div>
          </div>
        </div>
      </main>

      
    </div>

  );
}
function ActiveLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch( { path: resolvedPath.pathname, end : true});

  return (
    <li id ="nolist"className ={isActive ? "active" : ""}>
       <Link to= {to} {...props}>
        {children}
       </Link>
    </li>
  )
}
export function Taskbar(props) {
  const logo = props.image1
  return (
<header>
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand">
        
        <img src={logo} width={"100px"} height={"100px"}></img>
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
          <li className="nav-item-active">
            <ActiveLink to="/home" className="nav-link">
              Home
            </ActiveLink>
          </li>
          <li className="nav-item">
            <ActiveLink to="/aboutus"  className="nav-link">
              About Us
            </ActiveLink>
          </li>
          <li className="nav-item">
            <ActiveLink  to="/services" className="nav-link">
              Services
            </ActiveLink>
          </li>
          <li className="nav-item">
          <ActiveLink to="/contactus" className="nav-link">
            Contact Us
          </ActiveLink>
        </li>
        </ul>
        <form role="search"></form>
      </div>
    </div>
  </nav>

</header>

  );
  
}

export function Footer() {
  return (
      <footer>
  <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <ActiveLink to="/home" className="nav-link">
              Home
            </ActiveLink>
        </li>
        <li className="nav-item">
        <ActiveLink to="/aboutus"  className="nav-link">
              About Us
            </ActiveLink>
        </li>
        <li className="nav-item">
        <ActiveLink  to="/services" className="nav-link">
              Services
            </ActiveLink>
        </li>
        <li className="nav-item">
        <ActiveLink to="/contactus" className="nav-link">
            Contact Us
          </ActiveLink>
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
  );
}
export function StudentInfo(props) {
  const { images } = props;
  const logo = props.image1;
  return (
    
    <div>
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
          May, 6th 2023 <br />
          Carter Cutsforth: cvcuts@iastate.edu <br />
          Keenan Jacobs: kcjacobs@iastate.edu <br />
        </p>
      </div>
    </div>
    </div>
  );
}
