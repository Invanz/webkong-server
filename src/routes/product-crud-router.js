const express = require("express");
const ProductCRUD = require("../CRUDs/ProductCRUD.js");
const connectDb = require("../database/conn.js");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    await connectDb();

    const productList = await ProductCRUD.findProducts();

    res.status(200).json(productList);
});

router.post("/", async (req, res) => {
    await connectDb();

    const product = req.body;
    const newProduct = await ProductCRUD.createProduct(product);

    res.status(201).json(newProduct);
});

router.delete("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const deletedProduct = await ProductCRUD.deleteProductById(id);

    res.status(200).json(deletedProduct);

});

router.put("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const data = req.body;

    const updatedProduct = await ProductCRUD.updateProduct(id, data);

    res.status(200).json(updatedProduct);
});

module.exports = router;