import express from "express";
import cors from "cors";
import gamesRouter from "./routes/games.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Enable CORS for all origins
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Gameboxd API is running", version: "1.0.0" });
});

app.use("/api/games", gamesRouter);

export default app;
