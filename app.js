import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import movieRoutes from "./routes/movie.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/movies", movieRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    await connectDB();
    console.log("Server Started");
});
