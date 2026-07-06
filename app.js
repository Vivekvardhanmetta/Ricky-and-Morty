const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const characterRoutes = require("./routes/characterRoutes");
const episodeRoutes = require("./routes/episodeRoutes");
const locationRoutes = require("./routes/locationRoutes");

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/episodes", episodeRoutes);
app.use("/api/locations", locationRoutes);
// Home Route
app.get("/", (req, res) => {
    res.send("API Running...");
});

module.exports = app;   