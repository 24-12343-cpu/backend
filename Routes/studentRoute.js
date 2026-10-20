
import * as bookController from "../Controllers/bookControllers.js";
import express from "express";

const bookRoutes = express.Router();

// GET: Retrieve all books
bookRoutes.get("/all", bookController.fetchAllBooks);

// POST: Create a new book
bookRoutes.post("/", bookController.createBook);

export default bookRoutes;
