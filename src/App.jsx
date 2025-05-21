import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from "./Pages/shopCategory";
import Product from "./Pages/Product";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/chocolates"element={<ShopCategory category="chocolates" />}/>
          <Route path="/pastries"element={<ShopCategory category="pastries" />}/>
          <Route path="/cakes"element={<ShopCategory category="cakes" />}/>
          <Route path="/croissants"element={<ShopCategory category="croissants" />}/>
          <Route path="/cookies"element={<ShopCategory category="cookies" />}/>
          <Route path="/macarons"element={<ShopCategory category="macarons" />}/>
          <Route path='/product/:productId' element={<Product/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
