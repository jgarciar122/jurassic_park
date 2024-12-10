const express = require('express');
const { getDinosaurio } = require('../controllers/dinosaurioController');
const router = express.Router();

router.get('/', getDinosaurio);

module.exports = router;
