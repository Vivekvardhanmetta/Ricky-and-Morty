const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["Alive", "Dead", "Unknown"],
            required: true
        },

        species: {
            type: String,
            required: true
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Unknown"],
            required: true
        },

        image: {
            type: String
        },

        location: {
            type: String
        },

        episodes: [
            {
                type: String
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Character", CharacterSchema);