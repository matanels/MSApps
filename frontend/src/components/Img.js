import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ImageModal from "../modals/ImageModal.js";

const Img = ({ image }) => {
  // State to track the modal open/close state
  const [modalOpen, setModalOpen] = useState(false);

  // Event handler for clicking on the image
  const handleImageClick = () => {
    setModalOpen(true);
  };

  // Event handler for closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Card component to display the image */}
      <Card className="my-3 p-3 rounded">
        <Card.Img
          src={image.largeImageURL}
          variant="top"
          width="300"
          height="300"
          onClick={handleImageClick}
        ></Card.Img>
      </Card>
      {/* Modal component to display the image in a larger view */}
      {modalOpen && <ImageModal image={image} onClose={handleCloseModal} />}
    </>
  );
};

export default Img;
