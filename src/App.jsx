import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Login from "./Pages/Login";
import Basket from "./Pages/Basket";
import SinglePage from "./Pages/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Login" element={<Login />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Catalog/SinglePage" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
