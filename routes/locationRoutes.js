const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/auth");

const {

    createLocation,
    getLocations,
    getLocation,
    updateLocation,
    deleteLocation

} = require("../controllers/locationController");

// Public
router.get("/", getLocations);

router.get("/:id", getLocation);

// Protected
router.post("/", protect, createLocation);

router.put("/:id", protect, updateLocation);

router.delete("/:id", protect, deleteLocation);

module.exports = router;