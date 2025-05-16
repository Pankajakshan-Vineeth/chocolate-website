import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Pages/Shop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
