// /routes/emergencies.js
const express = require('express');
const { getEmergencia } = require('../controllers/emergenciaController');
const router = express.Router();

router.get('/', getEmergencia);

module.exports = router;
