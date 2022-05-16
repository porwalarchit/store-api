const express = require("express");
const router = express.Router();
const {getAllProductsStatic, getAllProducts} = require("../controllers/products")

router.get('/', getAllProductsStatic);
router.get('/static', getAllProducts)

module.exports = router
