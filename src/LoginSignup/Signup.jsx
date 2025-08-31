import React, { useState } from "react";
import "./Login.css";

const Signup = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    setShowMessage(true);
  };

  return (
    <section className="signup">
      <div className="signup-container">
        <form className="signup-form">
          <h2>Create New Account</h2>
          <input type="text" name="fullname" id="fullname" placeholder="Full Name" required />
          <input type="email" name="email" id="email" placeholder="Email" required />
          <input type="tel" name="mobile" id="mobile" placeholder="Mobile Number" required />
          <input type="text" name="city" id="city" placeholder="Your City" required />
          <input type="password" name="password" id="password" placeholder="Password" required />
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" required />
          

          <br />

          <div className="gender-box">
            <div className="gender-label">
              <label>Gender</label>
            </div>
            <div className="gender-data">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" value="Female" />
            </div>
          </div>

          <div className="term-conditions">
            <input type="checkbox" id="terms-box" required />
            <label htmlFor="terms-box">
              I accept the <b>Terms & Conditions</b>
            </label>
          </div>

          <button id="submit-btn" onClick={handleClick}>
            Signup
          </button>

          {showMessage && <p id="success-msg">Your Account is created</p>}

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
