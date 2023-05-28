import React, { useState } from "react";
import { Container, Button, Modal, Row, Col, Image } from "react-bootstrap";

const ImageModal = ({ image, onClose }) => {
  const [lgShow, setLgShow] = useState(true);

  const handleClose = () => {
    setLgShow(false);
    onClose();
  };

  return (
    <Modal size="lg" show={lgShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title id="type">{`Type: ${image.type}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {/* Image */}
          <Row>
            <Col className="d-flex justify-content-center py-3">
              <Image
                src={image.webformatURL}
                alt={image.type}
                fluid
                rounded
              />
            </Col>
          </Row>
          {/* Downloads */}
          <Row>
            <Col className="d-flex justify-content-center">
              <p>Downloads: {image.downloads}</p>
            </Col>
          </Row>
          {/* Views */}
          <Row>
            <Col className="d-flex justify-content-center">
              <p>Views: {image.views}</p>
            </Col>
          </Row>
          {/* Collection */}
          <Row>
            <Col className="d-flex justify-content-center">
              <p>Collection: {image.collections}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* Close button */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
