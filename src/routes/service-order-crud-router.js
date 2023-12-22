const express = require("express");
const connectDb = require("../database/conn.js");
const ServiceOrderCRUD = require("../CRUDs/ServiceOrderCrud.js");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    await connectDb();

    const serviceOrderList = await ServiceOrderCRUD.findServiceOrders();

    res.status(200).json(serviceOrderList);
});

router.get("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;

    const foundUser = await ServiceOrderCRUD.findServiceOrders(id);

    res.status(200).json(foundUser);
});

router.post("/", async (req, res) => {
    await connectDb();

    const serviceOrder = req.body;
    const newServiceOrder = await ServiceOrderCRUD.createServiceOrder(serviceOrder);

    res.status(201).json(newServiceOrder);
});

router.delete("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const deletedServiceOrder = await ServiceOrderCRUD.deleteServiceOrderById(id);

    res.status(200).json(deletedServiceOrder);

});

router.put("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const data = req.body;

    const updatedServiceOrder = await ServiceOrderCRUD.updateServiceOrder(id, data);

    res.status(200).json(updatedServiceOrder);
});

module.exports = router;