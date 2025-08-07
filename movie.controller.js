const Movie = require('../models/movie.model');

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllMovies = async (req, res) => {
    try {
        const filter = {};
        if (req.query.releaseYear) {
            filter.releaseYear = req.query.releaseYear;
        }
        const movies = await Movie.find(filter);
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie
};
