const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        episodeCode: {
            type: String,
            required: true,
            unique: true
        },

        airDate: {
            type: Date,
            required: true
        },

        characters: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Character"
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Episode", EpisodeSchema);