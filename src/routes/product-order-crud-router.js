const express = require("express");
const connectDb = require("../database/conn.js");
const ProductOrderCRUD = require("../CRUDs/ProductOrderCRUD.js");


const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    await connectDb();

    const userList = await ProductOrderCRUD.findProductOrders();

    res.status(200).json(userList);
});

router.post("/", async (req, res) => {
    await connectDb();

    const productOrder = req.body;
    const newProductOrder = await ProductOrderCRUD.createProductOrder(productOrder);

    res.status(201).json(newProductOrder);
});

router.delete("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const deletedProductOrder = await ProductOrderCRUD.deleteProductOrderById(id);

    res.status(200).json(deletedProductOrder);

});

router.put("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const data = req.body;

    const updatedProductOrder = await ProductOrderCRUD.updateProductOrder(id, data);

    res.status(200).json(updatedProductOrder);
});

module.exports = router;