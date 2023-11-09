import { nanoid } from "nanoid";
import ShortenUrl from "../models/shortenUrl.js";

const generateShortUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      return res.status(400).json({ error: "Please enter the Long Url" });
    }
    const urlExists = await ShortenUrl.findOne({ redirectUrl: longUrl });
    if (urlExists) {
      return res.status(200).json({
        shortUrl: urlExists,
        message: "Short Url already exists",
      });
    }
    const shortID = nanoid(8);

    const shortUrl = new ShortenUrl({
      shortCode: shortID,
      redirectUrl: longUrl,
      visitHistory: [],
    });
    await shortUrl.save();
    res.status(201).json({
      shortUrl: shortUrl,
      message: "Short Url created successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const redirectToUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    // console.log(shortCode);
    if (!shortCode) {
      res.status(400).json({ error: "Wrong or empty Short Code" });
    }
    const urlDocument = await ShortenUrl.findOne({ shortCode });
    // console.log(urlDocument);
    if (urlDocument) {
      const { redirectUrl } = urlDocument;
      urlDocument.visitHistory.push({ timestamp: Date.now() });
      await urlDocument.save();
      res.redirect(redirectUrl);
      // console.log(redirectUrl);
    } else {
      return res.status(404).json({ error: "Url not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export { generateShortUrl, redirectToUrl };
