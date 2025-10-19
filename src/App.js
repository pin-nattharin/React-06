import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Navbar from './features/Navbar';
import { fetchProducts } from './features/Products/actions';

import Home from "./features/Home";
//import productsData from './app/data';
import AddForm from './features/Products/AddForm';
import UpdateForm from './features/Products/UpdateForm';
import GlobalStyle from './features/GlobalStyle';
//import "./index.css";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding-top: 48px;
`;

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
        const products = await axios.get(
          'https://68e9fe7ef1eeb3f856e5b329.mockapi.io/api/v1/data'
        );
        dispatch(fetchProducts(products.data));
      } 
      
      getProducts();
  }, [dispatch]);


  return (
    <>
    <GlobalStyle />
    <Navbar />
    <AppContainer>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
    </AppContainer>
    </>
  );
}

export default App;
