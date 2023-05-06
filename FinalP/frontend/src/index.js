import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { StudentInfo, Index, AboutUs, Services } from "./Tabs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <StudentInfo />
      <Index />
      <AboutUs />
      <Services />
    </div>
  );
}

