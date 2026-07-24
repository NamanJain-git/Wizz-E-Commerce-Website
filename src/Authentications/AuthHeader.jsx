import { Link } from "react-router-dom";
import logo from "../assets/Productimgs/logo.jpg";
import "./AuthHeader.css"

const AuthHeader = () => {
    return (
        <header className="auth-header">
            <Link to="/">
                <img src={logo} alt="Wizz Logo" />
            </Link>
        </header>
    );
};

export default AuthHeader;