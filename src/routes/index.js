const express = require('express');
const router = express.Router();
const ProductRouter = require('../routes/product');
const TransactionsRouter = require('../routes/transaction');
const CategoryRouter = require('../routes/category');

router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/transaction',TransactionsRouter);

module.exports = router;