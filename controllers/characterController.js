const Character = require("../models/Character");

// Create Character
exports.createCharacter = async (req, res) => {
    try {

        const character = await Character.create({
            name: req.body.name,
            status: req.body.status,
            species: req.body.species,
            gender: req.body.gender,
            location: req.body.location,
            episodes: req.body.episodes,
            image: req.file ? req.file.path : ""
        });

        res.status(201).json({
            success: true,
            data: character
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Get All Characters
exports.getCharacters = async (req, res) => {

    try {

        let query = {};

        // Search
        if (req.query.search) {

            query.name = {
                $regex: req.query.search,
                $options: "i"
            };

        }

        // Filter Status
        if (req.query.status) {
            query.status = req.query.status;
        }

        // Filter Species
        if (req.query.species) {
            query.species = req.query.species;
        }

        // Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        // Sorting
        let sort = {};

        switch (req.query.sort) {

            case "name":
                sort = { name: 1 };
                break;

            case "-name":
                sort = { name: -1 };
                break;

            case "new":
                sort = { createdAt: -1 };
                break;

            case "old":
                sort = { createdAt: 1 };
                break;

            default:
                sort = { createdAt: -1 };

        }

        const total = await Character.countDocuments(query);

        const characters = await Character.find(query)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        res.status(200).json({

            success: true,

            total,

            page,

            totalPages: Math.ceil(total / limit),

            data: characters

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// Get Character By Id

exports.getCharacter = async (req, res) => {

    try {

        const character = await Character.findById(req.params.id);

        if (!character) {

            return res.status(404).json({

                message: "Character Not Found"

            });

        }

        res.status(200).json(character);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Update Character

exports.updateCharacter = async (req, res) => {

    try {

        const character = await Character.findById(req.params.id);

        if (!character) {

            return res.status(404).json({

                message: "Character Not Found"

            });

        }

        character.name = req.body.name || character.name;
        character.status = req.body.status || character.status;
        character.species = req.body.species || character.species;
        character.gender = req.body.gender || character.gender;
        character.location = req.body.location || character.location;
        character.episodes = req.body.episodes || character.episodes;

        if (req.file) {
            character.image = req.file.path;
        }

        const updated = await character.save();

        res.status(200).json(updated);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Delete Character

exports.deleteCharacter = async (req, res) => {

    try {

        const character = await Character.findById(req.params.id);

        if (!character) {

            return res.status(404).json({

                message: "Character Not Found"

            });

        }

        await character.deleteOne();

        res.status(200).json({

            message: "Character Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};