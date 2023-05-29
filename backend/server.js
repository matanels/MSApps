import express from "express";
import dotenv from "dotenv";
import path from "path";
import imageRoutes from "./routes/imageRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(express.json());

const __dirname = path.resolve();
app.use("/api/images", imageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// Middleware for handling 404 errors
app.use(notFound);
// Middleware for handling other errors
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on port ${PORT}`));
