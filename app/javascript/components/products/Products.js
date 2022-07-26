import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Products(){
  const [products, getProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios.get('/api/products')
    .then(response => {
      getProducts(response.data)
    });
  }

  const searchProduct = () => {
    const searchParams = { name: search }

    axios.post('/api/products/search', searchParams)
    .then(response => {
      getProducts(response.data)
    });
  }

  return( 
    <>
      <div className="wrapper">
        <label>
          <p><b>Search</b></p>
          <input 
            type="text" 
            placeholder="Search name" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit" onClick={searchProduct}>Submit</button>
      </div>
      <br />
      <a href="/new" class="btn btn-primary">
        New
      </a>
      <div>
        <h2>
          {products.length > 0 ? products.map((product, index) =>
            <div key={index}>
              <p>Name: {product.name}</p>
              <p>Upc: {product.upc}</p>
              <p>Available_on: {new Date(product.available_on).toLocaleDateString()}</p>
              <p>{product.properties.length > 0 && "Properties:-"} {product.properties.map(property => 
                <p>{property.name}: {property.value}</p>
                )}
              </p>
            </div>
          ) : 
          <h2>No products found</h2>}
        </h2>
      </div>
    </>
  )
}
