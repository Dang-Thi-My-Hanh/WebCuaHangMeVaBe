const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

/* GET ALL */
router.get("/", getProducts);

/* GET BY ID */
router.get("/:id", getProductById);

/* CREATE */
router.post("/", createProduct);

/* UPDATE */
router.put("/:id", updateProduct);

/* DELETE */
router.delete("/:id", deleteProduct);

module.exports = router;