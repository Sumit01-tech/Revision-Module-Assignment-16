const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const movieRouter = require('./routes/movie.routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/movies', movieRouter);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection failed:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server Started");
});
