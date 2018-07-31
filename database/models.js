const db = require('./index');
const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  restaurant: String
})

const reviewSchema = mongoose.Schema({
  reviewData: {
    id: String,
    rating: Number,
    time_created: Date,
    text: String,
<<<<<<< HEAD
    url: String,
    review_pic: String,
=======
    review_pic: String
>>>>>>> pr/5
  },
  user: {
    image_url: String,
    name: String,
    location: String,
    friends: Number,
    reviews: Number,
    photos: Number,
    elite: Boolean,
  },
  usefulVotes: {type: Number, default: 0},
  funnyVotes: {type: Number, default: 0},
  coolVotes: {type: Number, default: 0},
})

const Review = mongoose.model('Review', reviewSchema)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = {Restaurant, Review};