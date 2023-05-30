const express = require('express');
const router = express.Router();
const ProductRouter = require('../routes/product');
const TransactionsRouter = require('../routes/transaction');
const CategoryRouter = require('../routes/category');
const PayRouter = require('../routes/pays');

router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/transaction',TransactionsRouter);
router.use('/pay', PayRouter);

module.exports = router;