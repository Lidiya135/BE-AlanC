const modelpays = require('./../models/pays');
const {response} = require('../middleware/common');

const paysController = {

  getPay:(req,res,next) => {
    modelpays.selectPay()
    .then((result)=> response(res, 200, true, result.rows, "get data success"))
    .catch((err)=> response(res, 404, false, err, "get data fail"))
  },

  insert:(req,res, next) => {
    req.body.charge = parseInt(req.body.charge);
    req.body.pay = parseInt(req.body.pay);
    req.body.change = parseInt(req.body.change);
    req.body.transaction_id = parseInt(req.body.transaction_id);
    modelpays.insertPay(req.body)
    .then((result)=> response(res, 200, true, result.rows, "input data success"))
    .catch((err)=> response(res, 404, false, err, "input data fail"))
  },
  
  update:(req,res,next) => {
    console.log(req.params.id);
    req.body.charge = parseInt(req.body.charge);
    req.body.pay = parseInt(req.body.pay);
    req.body.change = parseInt(req.body.change);
    req.body.transaction_id = parseInt(req.body.transaction_id);
    modelpays.updatePay(req.params.id, req.body)
    .then((result)=> response(res, 200, true, result.rows, "update data success"))
    .catch((err)=> response(res, 404, false, err, "update data fail"))
  },

  delete:(req,res,next) => {
    modelpays.deletePay(req.params.id)
    .then((result)=> response(res, 200, true, result.rows, "delete data success"))
    .catch((err)=> response(res, 404, false, err, "delete data fail"))
  },

  getPayById:(req,res,next) => {
    modelpays.selectPayById(req.params.id)
    .then((result)=> response(res, 200, true, result.rows, "get data success"))
    .catch((err)=> response(res, 404, false, err, "get data fail"))
  },
};

exports.paysController = paysController;