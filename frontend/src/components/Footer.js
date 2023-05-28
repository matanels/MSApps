import React from "react";

const Footer = () => {
  return (
    // Footer container with fixed position at the bottom of the page and full width
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}
      >
        Made by Matanel Stinski
      </div>
    </footer>
  );
};

export default Footer;
