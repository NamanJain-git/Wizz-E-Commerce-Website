import { Link } from "react-router-dom"
import logo from "../assets/Productimgs/logo.jpg"
import "./Navbar.css"
import { useSearch } from "../Usecontext/Usecontext";
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileDropdown from "./Dropdown";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";

import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
    const { search, setSearch } = useSearch();

    const cartItems = useSelector((state) => state.cart.items);
    const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (

        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <ul className="main">
                    <Link to="/" style={{ color: "black", textDecoration: "none" }}><li>Home</li></Link>
                    <Link to="/men" style={{ color: "black", textDecoration: "none" }}><li>Men</li></Link>
                    <Link to="/women" style={{ color: "black", textDecoration: "none" }}><li>Women</li></Link>
                    <Link to="/kids" style={{ color: "black", textDecoration: "none" }}><li>Kids</li></Link>
                    <Link to="/beauty" style={{ color: "black", textDecoration: "none" }}><li>Beauty</li></Link>

                </ul>

                <div className="input-wrapper">
                    <span className="input-icon"><FaSearch /></span>
                    <input type="text"
                        placeholder="Search for products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>


                <div className="icon-options">
                    <ProfileDropdown />

                    {/* <div className="icons-data">
                        <div className="icons">
                            <FaHeart />
                        </div>
                        <p>whishlist</p>
                    </div> */}
                    <div className="icons-data items-center gap-2">
                        <Link to="/cartpage">
                            <div className="icons relative inline-block">
                                <FaShoppingCart size={28} />
                                {totalCartItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {totalCartItems}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <p>Cart</p>
                    </div>
                </div>


            </nav>
        </header>
    )
}
export default Nav