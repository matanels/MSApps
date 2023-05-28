import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";

import Img from "../components/Img";
import CategoryModal from "../modals/CategoryModal.js";
import Message from "../components/UIElements/Message.js";
import Loader from "../components/UIElements/Loader.js";

import {
  fetchImagesByCategory,
  setCurrentPage,
  setCategory,
  setSort,
} from "../redux/imageSlice";

const HomeScreen = () => {
  // State variables
  const [categoryModalShow, setCategoryModalShow] = useState(false);

  // Redux hooks
  const dispatch = useDispatch();
  const imagesList = useSelector((state) => state.images);
  const { images, error, loading, currentPage, category, limit, sortBy } =
    imagesList;

  useEffect(() => {
    // Fetch images by category when the component mounts or when dependencies change
    dispatch(
      fetchImagesByCategory({
        category,
        page: currentPage,
        limit,
        sortBy,
      })
    );
  }, [dispatch, currentPage, limit, category, sortBy]);

  const handlePrevPage = () => {
    // Go to the previous page
    dispatch(setCurrentPage(currentPage - 1));
  };
  const handleNextPage = () => {
    // Go to the next page
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleSort = (sortingValue) => {
    // Sort images based on the selected sorting value
    dispatch(setCategory(category));
    dispatch(setSort(sortingValue));
  };

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while images are being fetched
      ) : error ? (
        <Message variant="danger">{error}</Message> // Show error message if there's an error
      ) : (
        <Container>
          <Row>
            <Col>
              <Button
                variant="outline-dark"
                onClick={handlePrevPage}
                disabled={currentPage === 1} // Disable the button if it's the first page
              >
                Prev
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                variant="outline-dark"
                onClick={() => setCategoryModalShow(true)}
              >
                Category
              </Button>
              <CategoryModal
                show={categoryModalShow}
                onHide={() => setCategoryModalShow(false)}
              />
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-dark"
                onClick={handleNextPage}
                disabled={images.length < limit} // Disable the button if it's the last page
              >
                Next
              </Button>
            </Col>
          </Row>
          <Row>
            {images.map((image) => (
              <Col key={image.id} sm={12} md={6} lg={4}>
                {/* Hidden headings for demonstration */}
                <h1 hidden>id:{image.id}</h1>
                <h1 hidden>user:{image.user_id}</h1>
                <Img image={image} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="px-3">
                <Button
                  variant="outline-dark"
                  onClick={() => handleSort("id")}
                >
                  Sort by ID
                </Button>
              </div>
              <div className="px-3" style={{ paddingBottom: "80px" }}>
                <Button
                  variant="outline-dark"
                  onClick={() => handleSort("user_id")}
                >
                  Sort by User
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
