    const Episode = require("../models/Episode");

// Create Episode
exports.createEpisode = async (req, res) => {

    try {

        const episode = await Episode.create(req.body);

        res.status(201).json({
            success: true,
            data: episode
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get All Episodes
exports.getEpisodes = async (req, res) => {

    try {

        const episodes = await Episode.find()
            .populate("characters", "name status species");

        res.status(200).json({
            success: true,
            data: episodes
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get One Episode
exports.getEpisode = async (req, res) => {

    try {

        const episode = await Episode.findById(req.params.id)
            .populate("characters");

        if (!episode) {

            return res.status(404).json({
                message: "Episode Not Found"
            });

        }

        res.status(200).json(episode);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Update Episode
exports.updateEpisode = async (req, res) => {

    try {

        const episode = await Episode.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!episode) {

            return res.status(404).json({
                message: "Episode Not Found"
            });

        }

        res.status(200).json(episode);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Delete Episode
exports.deleteEpisode = async (req, res) => {

    try {

        const episode = await Episode.findByIdAndDelete(req.params.id);

        if (!episode) {

            return res.status(404).json({
                message: "Episode Not Found"
            });

        }

        res.status(200).json({
            message: "Episode Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};