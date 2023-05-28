import express from "express";
import dotenv from "dotenv";
import imageRoutes from "./routes/imageRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/images", imageRoutes);

// Middleware for handling 404 errors
app.use(notFound);
// Middleware for handling other errors
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on port ${PORT}`));
