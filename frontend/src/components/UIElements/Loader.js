import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  // Style for the spinner
  const spinner = {
    width: "100px",
    height: "100px",
    margin: "auto",
    display: "block",
  };

  return (
    // Display a spinner with specified animation and style
    <Spinner animation="border" role="status" style={spinner}></Spinner>
  );
};

export default Loader;
