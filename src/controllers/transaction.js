const modeltransactions = require('./../models/transaction');
const {response} = require('../middleware/common');

const transactionsController = {

  getTransaction:(req,res,next) => {
    modeltransactions.selectTransac()
    .then((result)=> response(res, 200, true, result.rows, "get data success"))
    .catch((err)=> response(res, 404, false, err, "get data fail"))
  },

  insert:(req,res, next) => {
    console.log(req.body.name);
    req.body.product_id = parseInt(req.body.product_id);
    req.body.amount = parseInt(req.body.amount);
    req.body.total = parseInt(req.body.total);
    req.body.pay = parseInt(req.body.pay);
    req.body.change = parseInt(req.body.change);
    modeltransactions.insertTransac(req.body)
    .then((result)=> response(res, 200, true, result.rows, "input data success"))
    .catch((err)=> response(res, 404, false, err, "input data fail"))
  },
  
  update:(req,res,next) => {
    console.log(req.body.name);
    req.body.product_id = parseInt(req.body.product_id);
    req.body.amount = parseInt(req.body.amount);
    req.body.total = parseInt(req.body.total);
    req.body.pay = parseInt(req.body.pay);
    req.body.change = parseInt(req.body.change);
    modeltransactions.updateTransac(req.params.id,req.body.name)
    .then((result)=> response(res, 200, true, result.rows, "update data success"))
    .catch((err)=> response(res, 404, false, err, "update data fail"))
  },

  delete:(req,res,next) => {
    modeltransactions.deleteTransac(req.params.id)
    .then((result)=> response(res, 200, true, result.rows, "delete data success"))
    .catch((err)=> response(res, 404, false, err, "delete data fail"))
  },

  getTransactionById:(req,res,next) => {
    modeltransactions.selectTransacById(req.params.id)
    .then((result)=> response(res, 200, true, result.rows, "get data success"))
    .catch((err)=> response(res, 404, false, err, "get data fail"))
  },
};

exports.transactionsController = transactionsController;