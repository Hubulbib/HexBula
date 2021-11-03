const { Router } = require('express');
const {convert} = require('../controllers/converter');

const router = Router()

router.post('/', convert)

module.exports = router;