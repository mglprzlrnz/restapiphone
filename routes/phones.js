const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phoneController');


router.get('/', phoneController.getAll);

module.exports = router;