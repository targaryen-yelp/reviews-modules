const db = require('../database/models');


module.exports = {
  fetch: (req, res) => {
    const { listName } = req.query; //change 
    db.Review.find({
      list_name: listName //change
    }, (err, reviews) => {
      if (err) {console.log(err)};
      res.status(200).send(reviews);
    })
  },
  post: (req, res) => {
    const { todo, listName } = req.body; //change
    new db.Review({
      name: todo, //change
      list_name: listName //change
    }).save((err, newReview) => {
      if (err) {console.log(err)};
      res.status(201).send(newReview);
    })
  },
}