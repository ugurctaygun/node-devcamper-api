const express = require('express');
const router = express.Router();
const {getBootcamps,getBootcamp,deleteBootcamp,updateBootcamp,createBootcamp} = require('../controllers/bootcamp')

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').delete(deleteBootcamp).put(updateBootcamp).get(getBootcamp);

module.exports = router;