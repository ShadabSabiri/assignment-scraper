const express = require("express");
const router = express.Router();

const { triggerScrape } =
  require("../controllers/scrapController");

router.post("/", triggerScrape);

module.exports = router;