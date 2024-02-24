const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: {
        type: { type: String },
        coordinates: []
    },
    averageRating: Number,
    numberOfRatings: Number
});

// Index the location field for geospatial queries
restaurantSchema.index({ location: '2dsphere' });

// Create a Mongoose model
const fooddata = mongoose.model('fooddata', restaurantSchema);

module.exports= fooddata;