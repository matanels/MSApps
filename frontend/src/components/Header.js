import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  // Styling for the header background image
  const backgroundImage = {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "370px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    position: "relative",
  };

  const navbarStyle = {
    // Styling for the navbar
    backgroundColor: "transparent",
    padding: "10px",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    textShadow: "0px 0px 2px black",
  };

  // Styling for the h1 element
  const h1Style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "80px",
    fontFamily: "Hanalei Fill, cursive",
    fontWeight: "bold",
    textShadow: "0px 2px 2px black",
  };

  return (
    <header>
      {/* Header with background image */}
      <div style={backgroundImage}>
        {/* Navigation bar */}
        <Navbar
          bg="transparent"
          expand="lg"
          className="position-absolute"
          style={{ top: 0, left: 10 }}
        >
          <Navbar.Brand href="/" style={navbarStyle}>
            MSApps
          </Navbar.Brand>
        </Navbar>
        {/* Heading */}
        <h1 style={h1Style}>Home Assignment</h1>
      </div>
    </header>
  );
};

export default Header;
