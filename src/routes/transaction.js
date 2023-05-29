const express = require("express");
const router = express.Router();
const { transactionsController } = require("../controllers/transaction");

router.get("/", transactionsController.getTransaction);
router.get("/:id",transactionsController.getTransactionById);
router.post("/", transactionsController.insert);
router.put("/", transactionsController.update);
router.delete("/", transactionsController.delete);

module.exports = router;