import express from "express";
import { getMovies, getMovieInfo, createMovie } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id/info", getMovieInfo);
router.post("/", createMovie);

export default router;
