const serviceOrderModel = require("../database/models/serviceOrderModel.js");

async function createServiceOrder(serviceOrder) {
  try {
      const newServiceOrder = await serviceOrderModel.create(serviceOrder);
      return newServiceOrder;
  } catch (error) {
      return error;
  };
};

const findServiceOrders = async () => {
  try {
    const ServiceOrderList = serviceOrderModel.find();
    return ServiceOrderList;
  } catch (error) {
    return error;
  };
};

const findServiceOrderById = async (id) => {
  try {
    const result = await serviceOrderModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteServiceOrderById = async (id) => {
  try {
    const result = await serviceOrderModel.deleteOne({_id : id});
    return result;
  } catch (error) {
    return error;
  }
};

const updateServiceOrder = async (id, data) => {
  try {
    const result= await serviceOrderModel.updateOne({_id : id}, {$set : {...data}});
    return result;
  } catch (error) {
    return error;
  }
};

const ServiceOrderCRUD = {
  createServiceOrder,
  findServiceOrders,
  findServiceOrderById,
  deleteServiceOrderById,
  updateServiceOrder,
};

module.exports = ServiceOrderCRUD;