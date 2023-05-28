import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query; // Access the query parameters
    const sortValue = req.headers["sort-by"]; // Access the sort value from the headers
    const pageNumber = parseInt(req.headers["page-number"]); // Access the page value from the headers
    const limitNumber = parseInt(req.headers["limit-number"]); // Access the limit value from the headers
    const imagesPerPage = parseInt(limitNumber) || 9; // Default to 9 images per page if limit is not provided
    const apiKey = process.env.apiKey;

    let response;

    if (!sortValue) {
      // If sortValue is not provided, fetch images without sorting
      response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${category}`
      );
    } else {
      // If sortValue is provided, fetch images with sorting based on the specified value
      response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${category}&order=${sortValue}`
      );
    }

    const imagesData = response.data.hits;

    // Sort imagesData based on the sortValue
    if (sortValue === "id") {
      imagesData.sort((first, second) => first.id - second.id);
    } else if (sortValue === "user_id") {
      imagesData.sort((first, second) => first.user_id - second.user_id);
    }

    const startIndex = (pageNumber - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    const paginatedImages = imagesData.slice(startIndex, endIndex);

    res.json(paginatedImages);
  } catch (error) {
    res.status(500);
    throw new Error("Server error");
  }
});

export default router;
