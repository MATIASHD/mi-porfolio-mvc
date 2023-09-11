const express = require('express');
const router = express.Router();

const productosController = require('../controllers/mainController');

router.get('/', productosController.index);

module.exports = router;