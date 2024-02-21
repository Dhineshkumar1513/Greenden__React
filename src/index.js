import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
 <BrowserRouter>
 <Routes>
    <Route path={'/'} element={<App></App>}></Route>
    <Route path={'/contact'} element={<Contact></Contact>}></Route>
    <Route path={'/product'} element={<Product></Product>}></Route>

 </Routes>
 </BrowserRouter>
 
  </div>
);
