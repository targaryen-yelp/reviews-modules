const db = require('./index');
const mongoose = require('mongoose');
require('mongoose-type-url');

const reviewSchema = mongoose.Schema({
  id: String,
  rating: Number,
  time_created: Date,
  user: {
    image_url: mongoose.SchemaTypes.Url,
    name: String,
    location: String,
    friends: Number,
    reviews: Number,
    photos: Number,
    elite: Boolean
  },
  text: String,
  url: mongoose.SchemaTypes.Url
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;