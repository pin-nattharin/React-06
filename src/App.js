import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './features/Navbar';
//import Container from "./features/Container";

import Home from "./features/Home";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          'https://68e9fe7ef1eeb3f856e5b329.mockapi.io/api/v1/data'
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    getProducts();
  }, []); // [] เพื่อให้รันแค่ครั้งเดียวตอน mount

  return (
    <>
    <GlobalStyle />
    <Navbar />
    <AppContainer>
        {/* 5. เพิ่มเงื่อนไขการแสดงผล */}
        {products.length > 0 ? (
          // 5.1 ถ้าโหลดข้อมูลเสร็จแล้ว (มี products) ให้แสดง Routes
          <Routes>
            <Route path="/create-product" element={<AddForm addProduct={() => {}} />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            {/* 6. ส่ง products เป็น props ลงไปให้ Home */}
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          // 5.2 ถ้ายังโหลดไม่เสร็จ ให้แสดง "Loading..."
          <div>Loading products....</div>
        )}
    </AppContainer>
    </>
  );
}

export default App;
