const express = require("express");
const router = express.Router();
const { transactionsController } = require("../controllers/transaction");

router.get("/", transactionsController.getTransaction);
router.get("/:id",transactionsController.getTransactionById);
router.post("/", transactionsController.insert);
router.put("/:id", transactionsController.update);
router.delete("/:id", transactionsController.delete);

module.exports = router;