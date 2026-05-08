const scrapeHackerNews = require("../utils/scraper");

exports.triggerScrape = async (req, res) => {
  try {

    await scrapeHackerNews();

    res.status(200).json({
      success: true,
      message: "Stories scraped successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};