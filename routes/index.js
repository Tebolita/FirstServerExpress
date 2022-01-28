const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.index);
router.get('/products', indexController.products );
router.post('/new-product', indexController.newProduct);


module.exports = router;