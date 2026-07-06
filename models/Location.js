const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            required: true
        },

        dimension: {
            type: String,
            required: true
        },

        residents: [
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

module.exports = mongoose.model("Location", LocationSchema);