import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Navbar/Navbar";
import Home from "./Home/Home";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Kids from "./Kids/Kids";
import Beauty from "./Beauty/Beauty";
import Footer from "./Footer/Footer";
import Desc from "./Description/Description1";
import Desc2 from "./Description/Description2";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import Cart1 from "./CartWishlist/Cart";
import Api from "./Api/Api1";

import Protect from "./Protect";
import Cartpage from "./CartWishlist/Cartpage";
import CartforApi from "./CartWishlist/CartforApi";
import Categorylist from "./Categorypage/Categorylist";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Protect><Home /></Protect>} />
        <Route path="/men" element={<Protect><Men /></Protect>} />
        <Route path="/women" element={<Protect><Women /></Protect>} />
        <Route path="/kids" element={<Protect><Kids /></Protect>} />
        <Route path="/beauty" element={<Protect><Beauty /></Protect>} />
        <Route path="/description" element={<Desc />} />
        <Route path="/description/:id" element={<Desc />} />
        <Route path="/description2/:id" element={<Desc2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart1 />} />
        <Route path="/cart/:id" element={<Cart1 />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/cartforapi" element={<CartforApi />} />
        <Route path="/cartforapi/:id" element={<CartforApi />} />
        <Route path="/category/:category" element={<Categorylist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
