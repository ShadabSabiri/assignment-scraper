require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require('./routes/auth');
const storiesRoutes = require('./routes/stories');

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

//Middlewares
app.use(express.json());



//Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storiesRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;