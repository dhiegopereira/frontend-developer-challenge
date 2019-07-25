var express = require('express');
var router = express.Router();
const productController = require('../controllers/product')

/* GET users listing. */
router.get('/', productController.show)

module.exports = router;