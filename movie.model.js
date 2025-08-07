const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseYear: {
        type: Number,
        required: true,
        min: [1888, 'Release year must be after 1888']
    },
    genres: [String],
    isReleased: { type: Boolean, default: true }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
