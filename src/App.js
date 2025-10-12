//import React from "react";
import Navbar from './features/Navbar';
import Container from "./features/Container";
import Home from "./features/Home";
import React, { Fragment } from 'react';
import GlobalStyle from './features/GlobalStyle';
//import "./index.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />         {/* ใส่ Navbar ด้านบน */}
      <Container>
        <Home />        {/* เนื้อหาหลัก */}       
      </Container>
    </>
  );
}

export default App;
