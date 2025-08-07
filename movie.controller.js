import { Movie } from "../models/movie.model.js";

export const getMovies = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;

        const movies = await Movie.find()
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({ success: true, data: movies });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

export const getMovieInfo = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ success: false, message: "Movie not found" });

        movie.logMovieInfo();
        res.json({ success: true, message: "Movie info logged to console" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

export const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json({ success: true, data: movie });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
