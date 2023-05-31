const express = require("express");
const router = express.Router();
const { transactionsController } = require("../controllers/transaction");

router.get("/", transactionsController.getTransaction);
router.get("/tot", transactionsController.get);
router.get("/:id",transactionsController.getTransactionById);
router.post("/", transactionsController.insert);
router.put("/:id", transactionsController.update);
router.delete("/:id", transactionsController.delete);
router.delete("/", transactionsController.deletee);

module.exports = router;