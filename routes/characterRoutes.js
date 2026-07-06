const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");
const { protect } = require("../middleware/auth");

const {
    createCharacter,
    getCharacters,
    getCharacter,
    updateCharacter,
    deleteCharacter
} = require("../controllers/characterController");


// Public Routes
router.get("/", getCharacters);

router.get("/:id", getCharacter);


// Protected Routes
router.post(
    "/",
    protect,
    upload.single("image"),
    createCharacter
);

router.put(
    "/:id",
    protect,
    upload.single("image"),
    updateCharacter
);

router.delete(
    "/:id",
    protect,
    deleteCharacter
);

module.exports = router;