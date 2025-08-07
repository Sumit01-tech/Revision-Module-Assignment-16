import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseYear: { type: Number, required: true }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
movieSchema.virtual("shortTitle").get(function () {
    return this.title.length > 15 ? this.title.slice(0, 15) + "..." : this.title;
});

movieSchema.methods.logMovieInfo = function () {
    console.log(`Title: ${this.title}, Director: ${this.director}, Year: ${this.releaseYear}`);
};

export const Movie = mongoose.model("Movie", movieSchema);
