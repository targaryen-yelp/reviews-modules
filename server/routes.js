const router = require('express').Router();
const controller = require('./controller.js');


router.route('/reviews') // '/todolist' is added to each of the requests below
.get(controller.fetch)
.post(controller.post)

module.exports = router;