const {Restaurant, Review} = require('../database/models');
const faker = require('faker');

module.exports = {
  get: (req, res) => {
    Review.find({}, (err, reviews) => {
      if (err) {console.log(err)};
      res.status(200).send(reviews);
    })
  },
  post: (req, res) => {
    new Review({
      restaurant: faker.company.companyName(),
      reviewData: {
        id: faker.random.uuid(),
        rating: faker.random.number(5),
        time_created: faker.date.past(),
        text: faker.lorem.paragraphs(),
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
  deleteReview: (req, res) => {
    let query = {_id: req.params.id};

    Review.findOneAndDelete(query)
    .then(review => {
      res.json(review);
    })
    .catch(err => {
      console.log(query)
      res.status(500).send('error deleting review', err);
    });
  },


  // getRestaurant: (req, res) => { 
  //   Restaurant.find({}, (err, reviews) => {
  //     if (err) {console.log(err)};
  //     res.status(200).send(reviews);
  //   })
  // },
  // postRestaurant: (req, res) => {
  //   new Restaurant({
  //     restaurant: faker.company.companyName()
  //   }).save((err, newRestaurant) => {
  //     if (err) {console.log(err)};
  //     res.status(201).send(newRestaurant);
  //   })
  // },
  useful(req, res) {
    let query = {_id: req.params.id};
    let options = {new: true};

    Review.findOneAndUpdate(query, {$inc: {usefulVotes: 1}}, options)
    .then(review => {
      res.json(review);
    })
    .catch(err => {
      console.log(query)
      res.status(500).send('error updating review', err);
    });
  },
  funny(req, res) {
    let query = {_id: req.params.id};
    let options = {new: true};

    Review.findOneAndUpdate(query, {$inc: {funnyVotes: 1}}, options)
    .then(review => {
      res.json(review);
    })
    .catch(err => {
      res.status(500).send('error updating review', err);
    });
  },
  cool(req, res) {
    let query = {_id: req.params.id};
    let options = {new: true};

    Review.findOneAndUpdate(query, {$inc: {coolVotes: 1}}, options)
    .then(review => {
      res.json(review);
    })
    .catch(err => {
      res.status(500).send('error updating review', err);
    });
  }
}
