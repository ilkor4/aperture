const router = require('express').Router();

const { createOrder } = require('../controllers/order');

router.post('/', createOrder);

module.exports = router;
