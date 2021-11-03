const { Router } = require('express');
const {calculator} = require('../controllers/calculator');

const router = Router()

router.post('/', calculator)

module.exports = router