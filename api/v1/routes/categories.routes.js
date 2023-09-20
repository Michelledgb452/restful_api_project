const {Router, request} = require('express');

const categoryController = require('../../../controllers/categoryController');
const router = Router(); //Llamamos al método Router de Express

router.get("/", categoryController.getAllCategories);
router.get("/:CategoryId", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:CategoryId", categoryController.updateCategory);
router.delete("/:CategoryId", categoryController.deleteCategory);

module.exports = router;