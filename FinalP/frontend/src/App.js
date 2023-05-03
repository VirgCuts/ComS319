import logo from './logo.svg';
import './App.css';

function AboutUs() {
  return (
    <div>
     <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <title>HomePage</title>
    </head>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><img src="./images/cliftonLogo.jpeg" width="100px" height="100px" alt="logo"></img></a>


        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="AboutUs.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="services.html">Services</a>
            </li>

          </ul>
          <form role="search">
          </form>
        </div>

      </div>
    </nav>
    <hr class="featurette-divider"></hr><div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">The story <span class="text-muted">of ROBERT</span></h2>
          <p class="lead">
            &nbsp;&nbsp; Robert Clifton graduated from Iowa State University with a bachelor's degree in Civil Engineering and specializes in structural engineering. Rob is originally from Winterset, Iowa and now lives in Ankeny, Iowa. In his spare time, he enjoys hunting, golfing, and spending time with his wife and daughter.
            He has worked on a wide variety of projects, including residential and commercial. His experience includes K-12 buildings, university buildings, office buildings, churches, home additions and modifications, and more.
          </p>
        </div>
        <div class="col-md-5">
          <img src="./images/robClifton.jpeg" width="500px" height="500px"></img>
        </div>
      </div><hr class="featurette-divider"></hr><div class="row" id="padding">
        <div class="col-lg-4">
          <svg width="140" height="140"><img src="./images/placeholder.jpeg" width="200px" height="200px" id="imageCircles"></img></svg>
          <h2 class="fw-normal">Past Jobs</h2>
          <p>Lorem Epsum</p>
        </div>
        <div class="col-lg-4">
          <svg width="140" height="140"><img src="./images/residentialRemodel.jpeg" width="200px" height="200px" id="imageCircles"></img></svg>
          <h2 class="fw-normal">PLACEHOLDER</h2>
          <p>Lorem Epsum</p>
        </div>
        <div class="col-lg-4">
          <svg width="140" height="140"><img src="./images/bearingWallRemovalKairos1.jpg" width="200px" height="200px" id="imageCircles"></img></svg>
          <h2 class="fw-normal">PLACEHOLDER</h2>
          <p>Lorem Epsum</p>
        </div>
      </div><footer>
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
              <li class="nav-item"><a href="AboutUs.html" class="nav-link px-2 text-muted">About Us</a></li>
              <li class="nav-item"><a href="services.html" class="nav-link px-2 text-muted">Services</a></li>
            </ul>
            <p class="text-center text-muted">Copyright &copy; 2023 Clifton Structural - All Rights Reserved.</p>
            <p class="text-center text-muted">Need a Consultation?</p>
            <p class="text-center text-muted">Phone: 515-468-1480 </p>
            <p class="text-center text-muted">Email: <a href="Mailto:Rob@cliftonstructural.com">Rob@cliftonstructural.com</a></p>


          </footer>
        </div>
      </footer>
    </div>
  );
}

function index() {
  return(
<div>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <title>HomePage</title>
</head>
<body>
    <section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-
w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
crossorigin="anonymous"></script>
<script src="code.js"></script>
    </section>
<header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" ><img src="./images/cliftonLogo.jpeg" width="100px" height="100px" alt="logo"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutus.html">About Us</a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="services.html">Services</a>
                </li>
          </ul>
          <form role="search">
          </form>
        </div>
      </div>
    </nav>
  </header>

  
  <main id="homeData"></main>

  <main>

    <div>
      <div>
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal" id="font50weight400"> Structural Engineering </h1>
          <p class="lead fw-normal" id="italics25px">   Clifton Structural takes pride in responsiveness.
            Rob understands your time is valuable and will provide a design to fit your residential or commercial engineering needs. Deliverables include structural engineering construction documents and structural calculations.
          </p>
          
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>  
    </div>

    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        
        <p class="display-5 fw-bold" id="pointfont25"><img src="./images/robClifton.jpeg" width="200px" height ="200px" id="imageCircles"></img> </p>
        <p class="hometext">  Robert Clifton graduated from Iowa State University with a bachelor's degree in Civil Engineering and specializes in structural engineering. Rob is originally from Winterset, Iowa and now lives in Ankeny, Iowa. In his spare time, he enjoys hunting, golfing, and spending time with his wife and daughter.</p>
        <button onclick ="window.location.href='aboutus.html';" class="btn btn-primary btn-lg" type="button">Learn More</button>
      </div>
    </div>
  </main>

  <main>
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        
        <p class="display-5 fw-bold" id="pointfont25" ><img src="./images/ourServices.jpeg" width="200px" height ="200px" id="imageCircles"></img> </p>
        <p> Our services include various commercial and residential consultation and design</p>
        <button onclick ="window.location.href='services.html';" class="btn btn-primary btn-lg" type="button"> 
          Learn More
        </button>
      </div>
    </div>
  </main>

  <main>
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        
        <p class="display-5 fw-bold" id="pointfont25"><img src="./images/callForConsultation.jpeg" width="200px" height ="200px" id="imageCircles" ></img> </p>
        <p>
            Phone Number: 515-468-1480 
            Email: <a href="Rob@cliftonstructural.com">Rob@cliftonstructural.com</a>
        </p>
      </div>
    </div>
  </main>


  <footer>
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
          <li class="nav-item"><a href="AboutUs.html" class="nav-link px-2 text-muted">About Us</a></li>
          <li class="nav-item"><a href="services.html" class="nav-link px-2 text-muted">Services</a></li>
        </ul>
        <p class="text-center text-muted">Copyright &copy; 2023 Clifton Structural - All Rights Reserved.</p>
        <p class="text-center text-muted">Need a Consultation?</p>
        <p class="text-center text-muted">Phone: 515-468-1480 </p>
        <p class="text-center text-muted">Email: <a href = "Mailto:Rob@cliftonstructural.com">Rob@cliftonstructural.com</a></p>
        
        
      </footer>
    </div>
  </footer>

</body>
</div>
  );
}

function services() {
  return (
  <div>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <title>HomePage</title>
</head>
<body>
    <section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
    alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-
    w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>
    <script src="./code.js"></script>
        </section>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand"><img src="./images/cliftonLogo.jpeg" width="100px" height="100px" alt="logo"></img></a>
            
      
            <div class="collapse navbar-collapse" id="navbarsExample03">
              <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                    </li>
                <li class="nav-item">
                  <a class="nav-link" href="aboutus.html">About Us</a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="services.html">Services</a>
                  </li>
              </ul>
              <form role="search">
              </form>
            </div>
          </div>
        </nav>
      </header>

      <div id="myData">
        <div id="myProduct"></div>  
      </div>

      <main>
        
        <p id="services">
          &nbsp;&nbsp;&nbsp;Below is a summary of the structural engineering services we offer in Iowa.Please contact us for a free consultation to understand your specific needs.
        </p>
        <div class="col-lg-8 mx-auto p-4 py-md-5">
        <div class="row g-5">
          <div class="col-md-6">
            <h1 id="textDeco">Commercial</h1>
              <ul class="icon-list ps-0"></ul>
              <li>
              <h2>Building Design</h2>
              <p>We work with architects and owners to provide gravity and lateral systems to support the design intent.</p>
            </li>
            <li>
              <h2>Construction Engineering</h2>
              <p>
                We work with contractors to provide construction phase solutions, such as temporary shoring and verification of construction loading conditions.
              </p>
            </li>
            <li>
              <h2>Steel Connection Design</h2>
            </li>
              <ul class="icon-list ps-0">
                We work with contractors to provide construction phase solutions, such as temporary shoring and verification of construction loading conditions.
            </ul>
          </div>
    
          <div class="col-md-6">
            <h1 id="textDeco">Residential</h1>
            <h2>Residential Consultation</h2>
            <p>We work with homeowners and their contractors to provide engineering solutions for home additions and modifications.</p>
            <ul class="icon-list ps-0">
              
            </ul>
          </div>
        </div>
      </div>
      </main> 
      
      <footer>
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
              <li class="nav-item"><a href="AboutUs.html" class="nav-link px-2 text-muted">About Us</a></li>
              <li class="nav-item"><a href="services.html" class="nav-link px-2 text-muted">Services</a></li>
            </ul>
            <p class="text-center text-muted">Copyright &copy; 2023 Clifton Structural - All Rights Reserved.</p>
            <p class="text-center text-muted">Need a Consultation?</p>
            <p class="text-center text-muted">Phone: 515-468-1480 </p>
            <p class="text-center text-muted">Email: <a href = "Mailto:Rob@cliftonstructural.com">Rob@cliftonstructural.com</a></p>
            
            
          </footer>
        </div>
      </footer>
</body>
</div>
);
}

function studentInfo() {
  return(
  <div>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <title>HomePage</title>
</head>

    <section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
    alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-
    w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>
    <script src="./code.js"></script>
        </section>
        <title>CarterC&KeenanJ</title>

    <p>
        SE/ComS319 Construction of User Interfaces, Spring 2023 <br></br>
        March, 11th 2023    <br></br>
        Carter Cutsforth: cvcuts@iastate.edu    <br></br>
        Keenan Jacobs: kcjacobs@iastate.edu <br></br>
    </p>
  </div>
  );
}
export default studentInfo;
