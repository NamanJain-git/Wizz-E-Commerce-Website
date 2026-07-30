// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Nav from "./Navbar/Navbar";
import Home from "./Home/Home";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Kids from "./Kids/Kids";
import Beauty from "./Beauty/Beauty";
import Footer from "./Footer/Footer";
import Login from "./Authentications/Login";
// import Signup from "./Authentications/Signup";
import AuthHeader from "./Authentications/AuthHeader";
import Cart from "./CartWishlist/Cart";
// import Api from "./Api/Api1";
import Protect from "./Protect";
import Cartpage from "./CartWishlist/Cartpage";
import CartforApi from "./CartWishlist/CartforApi";
import Categorylist from "./Categorypage/Categorylist";
import Checkout from "./Checkoutpage/Checkout";
import ScrollToTop from "/ScrollToTop";

function Layout() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {isAuthPage ? <AuthHeader /> : <Nav />}


      <Routes>
        <Route path="/" element={<Protect><Home /></Protect>} />
        <Route path="/men" element={<Protect><Men /></Protect>} />
        <Route path="/women" element={<Protect><Women /></Protect>} />
        <Route path="/kids" element={<Protect><Kids /></Protect>} />
        <Route path="/beauty" element={<Protect><Beauty /></Protect>} />

        <Route path="/login" element={<Login />} />
        {/* Uncomment when you create Signup */}
        {/* <Route path="/signup" element={<Signup />} /> */}

        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />

        <Route path="/cartpage" element={<Cartpage />} />

        <Route path="/cartforapi" element={<CartforApi />} />
        <Route path="/cartforapi/:id" element={<CartforApi />} />

        <Route path="/category/:category" element={<Categorylist />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;



{/* const App = () => {

  function Layout() {
    const location = useLocation();

    const isAuthPage =
        location.pathname === "/login" ||
        location.pathname === "/signup";

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

export default App; */}
