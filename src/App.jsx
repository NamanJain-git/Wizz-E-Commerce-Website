import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Navbar/Navbar";
import Home from "./Home/Home";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Kids from "./Kids/Kids";
import Beauty from "./Beauty/Beauty";
import Footer from "./Footer/Footer";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import Cart from "./CartWishlist/Cart";
import Api from "./Api/Api1";
import Protect from "./Protect";
import Cartpage from "./CartWishlist/Cartpage";
import CartforApi from "./CartWishlist/CartforApi";
import Categorylist from "./Categorypage/Categorylist";
import Checkout from "./Checkoutpage/Checkout";

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
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/cartforapi" element={<CartforApi />} />
        <Route path="/cartforapi/:id" element={<CartforApi />} />
        <Route path="/category/:category" element={<Categorylist />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
