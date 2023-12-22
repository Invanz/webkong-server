const express = require("express");
const ServiceCRUD = require("../CRUDs/ServiceCRUD.js");
const connectDb = require("../database/conn.js");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    await connectDb();

    const serviceList = await ServiceCRUD.findServices();

    res.status(200).json(serviceList);
});

router.get("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;

    const foundUser = await ServiceCRUD.findServices(id);

    res.status(200).json(foundUser);
});

router.post("/", async (req, res) => {
    await connectDb();

    const service = req.body;
    const newService = await ServiceCRUD.createService(service);

    res.status(201).json(newService);
});

router.delete("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const deletedService = await ServiceCRUD.deleteServiceById(id);
    
    res.status(200).json(deletedService);

});

router.put("/:id", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const data = req.body;

    const updatedService = await ServiceCRUD.updateService(id, data);

    res.status(200).json(updatedService);
});

module.exports = router;