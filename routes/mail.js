const { Router } = require('express');
const {mail} = require('../controllers/tomail');

const router = Router()

router.post('/', mail)

module.exports = router;