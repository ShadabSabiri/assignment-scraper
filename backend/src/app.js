require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require('./routes/auth');
const storiesRoutes = require('./routes/stories');
const scrapeRoutes = require('./routes/scrape');

const app = express();

// Middleware
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storiesRoutes);
app.use("/api/scrape", scrapeRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;