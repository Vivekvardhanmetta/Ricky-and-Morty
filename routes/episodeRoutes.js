const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/auth");

const {

    createEpisode,
    getEpisodes,
    getEpisode,
    updateEpisode,
    deleteEpisode

} = require("../controllers/episodeController");

// Public
router.get("/", getEpisodes);

router.get("/:id", getEpisode);

// Protected
router.post("/", protect, createEpisode);

router.put("/:id", protect, updateEpisode);

router.delete("/:id", protect, deleteEpisode);

module.exports = router;