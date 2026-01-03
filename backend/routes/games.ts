// in this file we are making a express router it is not a express app
import express from "express";
import { fetchFromRawg } from "../API/rawg.js";

const gamesRouter = express.Router();

gamesRouter.get("/", async (_req, res) => {
  try {
    console.log("Fetching games from RAWG API...");
    const games = await fetchFromRawg("/games", {
      page_size: 20,
      ordering: "-ratings",
    });

    console.log("Games fetched successfully");
    res.json(games);
  } catch (error: any) {
    console.error("Error fetching games:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch games", details: error.message });
  }
});

export default gamesRouter;
