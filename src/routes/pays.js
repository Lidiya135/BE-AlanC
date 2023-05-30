const express = require("express");
const router = express.Router();
const { paysController } = require("../controllers/pays");

router.get("/", paysController.getPay);
router.get("/:id",paysController.getPayById);
router.post("/", paysController.insert);
router.put("/:id", paysController.update);
router.delete("/:id", paysController.delete);

module.exports = router;