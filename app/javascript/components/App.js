import React from "react";
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom'
import NewProducts from "./products/NewProducts";
import Products from "./products/Products";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/new" element={<NewProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
