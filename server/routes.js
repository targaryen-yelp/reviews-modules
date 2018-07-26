const router = require('express').Router();
const controller = require('./controller.js');


router.route('/reviews')
.get(controller.get)
.post(controller.post)

module.exports = router;