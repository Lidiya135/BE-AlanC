const express = require('express');
const router = express.Router();
const {categoryController} = require('./../controllers/category');

router.get('/',categoryController.getCategory);
router.post('/',categoryController.insert);
router.put('/:id',categoryController.update);
router.delete('/:id',categoryController.delete);
router.get('/:id',categoryController.getCategoryById);

module.exports = router;