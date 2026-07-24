import { Link } from "react-router-dom"
import logo from "../assets/Productimgs/logo.jpg"
import "./Navbar.css"
import { useSearch } from "../Usecontext/Usecontext";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileDropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
    const { search, setSearch } = useSearch();

    const cartItems = useSelector((state) => state.cart.items);
    const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <nav>

                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <ul className={menuOpen ? "main active" : "main"}>

                    <Link
                        to="/"
                        onClick={closeMenu}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <li>Home</li>
                    </Link>

                    <Link
                        to="/men"
                        onClick={closeMenu}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <li>Men</li>
                    </Link>

                    <Link
                        to="/women"
                        onClick={closeMenu}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <li>Women</li>
                    </Link>

                    <Link
                        to="/kids"
                        onClick={closeMenu}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <li>Kids</li>
                    </Link>

                    <Link
                        to="/beauty"
                        onClick={closeMenu}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <li>Beauty</li>
                    </Link>

                </ul>

                <div className="input-wrapper">
                    <span className="input-icon">
                        <FaSearch />
                    </span>

                    <input
                        type="text"
                        placeholder="Search for products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="icon-options">

                    <ProfileDropdown />

                    <div className="icons-data items-center gap-2">
                        <Link to="/cartpage" onClick={closeMenu}>
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

                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <FaTimesCircle size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </div>

            </nav>
        </header>
    );
};

export default Nav;