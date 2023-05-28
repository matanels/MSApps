import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  // Display an alert component with the specified variant and children (content)
  return <Alert variant={variant}>{children}</Alert>;
};

// Set the default variant to "info" if not specified
Message.defaultProps = {
  variant: "info",
};

export default Message;
