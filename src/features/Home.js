import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import Product from './Products';
import AddForm from './Products/AddForm';

let currentProductId = 9;

function Home({className}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  async function getProducts() {
    const products = await axios.get(
      'https://68e9fe7ef1eeb3f856e5b329.mockapi.io/api/v1/data'
    );
    setProducts(products.data);
  }

  getProducts();
}, []); // [] เพื่อให้รันแค่ครั้งเดียวตอน mount

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

   return (
    <div className={className}>
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
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;