const express = require('express');
const { getRecinto } = require('../controllers/recintoController');
const router = express.Router();

router.get('/', getRecinto);

module.exports = router;
