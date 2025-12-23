import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "popup-overlay") {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay" onClick={handleOutsideClick}>
          <div className="popup">
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <div className="popup-content">
              <p className="popup-text">
                The server may take up to 30 seconds to load the food items
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="header">
        <div className="header-contents">
          <h2>Order your favourite food here</h2>

          <p>
            Enjoy your favorite meals from local restaurants with just a tap.
            With exclusive deals and fast delivery, experience fresh, delicious
            food anytime, anywhere, making mealtime effortless and enjoyable.
          </p>
          <ScrollLink
            to="explore-menu"
            offset={300}
            smooth={true}
            duration={1000}
          >
            <button>View Menu</button>
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Header;
