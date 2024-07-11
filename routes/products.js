const express = require('express');
const router = express.Router();

const products = require('../controllers/products');

router.route('/').get(products.getAllProducts);
router.route('/static').get(products.getAllProductsStatic);





module.exports = router;
