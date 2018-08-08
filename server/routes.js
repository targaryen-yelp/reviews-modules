const router = require('express').Router();
const controller = require('./controller.js');


router.route('/')
.get(controller.get)
.post(controller.post)
.get(controller.getRestaurant)
.post(controller.postRestaurant)

router.route('/:id')
.delete(controller.deleteReview)

router.route('/:id/usefulVotes')
  .post(controller.useful);

router.route('/:id/funnyVotes')
  .post(controller.funny);

router.route('/:id/coolVotes')
  .post(controller.cool);

module.exports = router;