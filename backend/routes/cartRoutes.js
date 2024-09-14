const express = require('express');
const { getCart, addToCart, updateCart, deleteFromCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/', getCart);
router.post('/', addToCart);
router.put('/', updateCart);
router.delete('/:id', deleteFromCart);

module.exports = router;
