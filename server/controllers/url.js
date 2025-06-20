import { nanoid } from "nanoid";
import Url from "../models/url.js";

function checkIfUrlIsValid(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(url);
}
async function handleCreateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  if (!checkIfUrlIsValid(body.url))
    return res.status(400).json({ error: "invalid url" });
  const shortId = nanoid(8);
  await Url.create({
    shortId: shortId,
    original_url: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await Url.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
export { handleCreateShortUrl, handleGetAnalytics };
