const db = require('./index');
const mongoose = require('mongoose');
// require('mongoose-type-url');

const restaurantSchema = mongoose.Schema({
  restaurant: String
})

const reviewSchema = mongoose.Schema({
  reviewData: {
    id: String,
    rating: Number,
    time_created: Date,
    text: String,
    url: String
  },
  user: {
    image_url: String,
    name: String,
    location: String,
    friends: Number,
    reviews: Number,
    photos: Number,
    elite: Boolean
  },
})

const Review = mongoose.model('Review', reviewSchema)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = {Restaurant, Review};
// module.exports = ;