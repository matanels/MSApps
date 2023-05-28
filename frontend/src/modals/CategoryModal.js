import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImagesByCategory,
  setCategory,
  setCurrentPage,
  setSort,
} from "../redux/imageSlice";

// Array of available categories
const categories = [
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transport",
  "travel",
  "buildings",
  "business",
  "music",
];

const CategoryModal = (props) => {
  const imagesList = useSelector((state) => state.images);
  const { category, limit } = imagesList;
  const dispatch = useDispatch();

  // Event handler for category selection
  const handleCategorySelect = (categoryChosen) => {
    dispatch(setCategory(categoryChosen));
    dispatch(setCurrentPage(1));
    dispatch(setSort(""));
    dispatch(
      fetchImagesByCategory({
        category: categoryChosen,
        page: 1,
        limit,
      })
    );
    props.onHide();
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please choose a category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {/* Rendering categories in a grid layout */}
          {Array.from(Array(Math.ceil(categories.length / 4)).keys()).map(
            (rowIndex) => (
              <Row key={rowIndex}>
                {/* Each row contains 4 categories */}
                {categories
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((categoryChosen, colIndex) => (
                    <Col xs={12} sm={6} md={3} key={colIndex}>
                      {/* Category button */}
                      <Button
                        onClick={() => {
                          handleCategorySelect(categoryChosen);
                        }}
                        variant={
                          category === categoryChosen ? "primary" : "link"
                        }
                      >
                        {categoryChosen}
                      </Button>
                    </Col>
                  ))}
              </Row>
            )
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        {/* Close button */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CategoryModal;
