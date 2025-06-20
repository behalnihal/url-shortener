import express from "express";
import {
  handleCreateShortUrl,
  handleGetAnalytics,
} from "../controllers/url.js";
const router = express.Router();

router.post("/", handleCreateShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);
export default router;
