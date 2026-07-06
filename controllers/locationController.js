const Location = require("../models/Location");

// Create
exports.createLocation = async (req, res) => {

    try {

        const location = await Location.create(req.body);

        res.status(201).json({
            success: true,
            data: location
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All
exports.getLocations = async (req, res) => {

    try {

        const locations = await Location.find()
            .populate("residents", "name status species");

        res.status(200).json({
            success: true,
            data: locations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get One
exports.getLocation = async (req, res) => {

    try {

        const location = await Location.findById(req.params.id)
            .populate("residents");

        if (!location) {

            return res.status(404).json({
                message: "Location Not Found"
            });

        }

        res.status(200).json(location);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update
exports.updateLocation = async (req, res) => {

    try {

        const location = await Location.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!location) {

            return res.status(404).json({
                message: "Location Not Found"
            });

        }

        res.status(200).json(location);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete
exports.deleteLocation = async (req, res) => {

    try {

        const location = await Location.findByIdAndDelete(req.params.id);

        if (!location) {

            return res.status(404).json({
                message: "Location Not Found"
            });

        }

        res.status(200).json({
            message: "Location Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};