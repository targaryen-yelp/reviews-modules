const {Restaurant, Review} = require('../database/models');
const faker = require('faker');


module.exports = {
  get: (req, res) => {
    // const { listName } = req.query; //change 
    // Restaurant.find({})
    // .populate('reviews')
    // .exec(function(err, review) {
    //   if (err) {console.log(err)};
    //   res.status(200).send(review);
    // })
   
    Review.find({}, (err, reviews) => {
      if (err) {console.log(err)};
      res.status(200).send(reviews);
    })
  },
  post: (req, res) => {
    new Review({
      reviewData: {
        id: faker.random.uuid(),
        rating: faker.random.number(5),
        time_created: faker.date.past(),
        text: faker.lorem.paragraphs(),
        url: faker.internet.url(),
        review_pic: faker.image.food(),
      },
      user: {
        image_url: faker.image.avatar(),
        name: faker.name.findName(),
        location: faker.address.city(),
        friends: faker.random.number(),
        reviews: faker.random.number(),
        photos: faker.random.number(),
        elite: faker.random.boolean(),
      },
    }).save((err, newReview) => {
      if (err) {console.log(err)};
      res.status(201).send(newReview);
    })
  },
}