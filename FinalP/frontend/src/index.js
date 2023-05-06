import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StudentInfo, Index, AboutUs, Services, changePage } from "./Tabs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function App() {
  if (changePage === 1) {
    return (<StudentInfo />);
  }
  else if (changePage === 2) {

    return(<Index />);
  }
  else if (changePage === 3) {

    return(<AboutUs />);
  }
  else if (changePage === 4) {

    return(<Services />);
  }
  
}
