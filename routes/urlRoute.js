import express from "express";
const router = express.Router();

import {
  generateShortUrl,
  redirectToUrl,
} from "../controller/urlController.js";

router.post("/", generateShortUrl);
router.get("/:shortCode", redirectToUrl);

export default router;
