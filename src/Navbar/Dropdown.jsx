import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const user = localStorage.getItem("currentUser");
      setCurrentUser(user ? JSON.parse(user) : null); // store actual user or null
    };

    loadUser(); // run immediately
    window.addEventListener("storage", loadUser);

    return () => window.removeEventListener("storage", loadUser);
  }, []);

 const logout = () => {
  localStorage.setItem("isLoggedIn", "false");

  localStorage.removeItem("currentUser");

  setCurrentUser(null);
  alert("Logged out successfully!");
  navigate("/login");
};


  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-basic"
        className="d-flex align-items-center"
        style={{ width: "65px" }}
      >
        <CgProfile size={30} />
      </Dropdown.Toggle>
      <p>Profile</p>
      <Dropdown.Menu>
        {!currentUser && (
          <Dropdown.Item as={Link} to="/login">
            Login
          </Dropdown.Item>
        )}

        {currentUser && (
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
