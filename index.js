import express from "express";
import urlRoute from "./routes/urlRoute.js";
import connectDB from "./connectDB.js";
import Url from "./models/url.js";

const app = express();
const PORT = 8000;

connectDB("mongodb://localhost:27017/urlShortener").then(() => {
  console.log("Connected to MongoDB");
});
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true, upsert: true }
  );
  if (entry) {
    res.redirect(entry.original_url);
  } else {
    res.status(400).json({ error: "Short URL not found" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
