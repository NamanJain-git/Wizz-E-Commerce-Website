import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Kids from "./Kids/Kids";
import Beauty from "./Beauty/Beauty";
import Nav from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Desc from "./Description/Description1";
import Desc2 from "./Description/Description2";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import Cart1 from "./CartWishlist/Cart";
import ProductList from "./ProductCards/ProductList";
import ProductCard from "./ProductCards/ProductCard";
import Api from "./Api/Api1";
import Categorylist from "./Categorypage/Categorylist";
import Protect from "./Protect";
import Cartpage from "./CartWishlist/Cartpage";
import CartforApi from "./CartWishlist/CartforApi";
// import CategoryCard from "./CategoryPage/Categorycard";


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <Protect>
            <Home />
          </Protect>
        } />
        <Route path="/description2/:id" element={<Desc2 />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/category" element={<ProductList />} />
        <Route path="/description" element={<Desc />} />
        <Route path="/description/:id" element={<Desc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart1 />} />
        <Route path="/cart/:id" element={<Cart1 />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/cartforapi" element={<CartforApi />} />
        <Route path="/cartforapi/:id" element={<CartforApi />} />
        {/* <Route path="/categorycard" element={<Categorycard />} /> */}
        {/* <Route path="/beauty" element={<Categorylist />} /> */}
        {/* <Route path="/beauty" element={<Categorypage />} /> */}


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
