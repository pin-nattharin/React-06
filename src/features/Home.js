import React, { useState } from 'react';
import axios from 'axios';

import Product from './Products';
import AddForm from './Products/AddForm';

let currentProductId = 9;

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const products = await axios.get(
      'https://68e9fe7ef1eeb3f856e5b329.mockapi.io/api/v1/data'
    );
    setProducts(products.data);
  }

  getProducts();

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
      <AddForm addProduct={addProduct} />
    </>
  );
}