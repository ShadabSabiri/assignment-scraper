require("dotenv").config();
const express = require("express");

const authRoutes = require('./routes/auth');
const storiesRoutes = require('./routes/stories');

const app = express();


//Middlewares
app.use(express.json());


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storiesRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;