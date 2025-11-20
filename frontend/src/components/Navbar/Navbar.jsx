import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ setShowLogin }) => {
  const [sticky, setSticky] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 5 ? setSticky(true) : setSticky(false)
    );
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <RouterLink to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </RouterLink>

      {isHomePage && (
        <ul className="navbar-menu">
          <li>
            <ScrollLink to="header" offset={-110} smooth={true} duration={1000}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="explore-menu"
              offset={-10}
              smooth={true}
              duration={1000}
            >
              Menu
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="app-download"
              offset={-160}
              smooth={true}
              duration={1000}
            >
              App Download
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="footer" smooth={true} duration={1000}>
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      )}

      <div className="navbar-right">
        <RouterLink to="/cart" className="navbar-basket-icon">
          <img src={assets.bag_icon} alt="Basket" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </RouterLink>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />

            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Orders" /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
