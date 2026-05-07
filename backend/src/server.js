require("dotenv").config();
const scrapeHackerNews = require("./utils/scraper");
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await scrapeHackerNews();  //this pure logic for auto-run

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();