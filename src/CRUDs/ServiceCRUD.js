const serviceModel = require("../database/models/serviceModel.js");

async function createService(service) {
  try {
      const newService = await serviceModel.create(service);
      return newService;
  } catch (error) {
      return error;
  };
};

const findServices = async () => {
  try {
    const ServiceList = serviceModel.find();
    return ServiceList;
  } catch (error) {
    return error;
  };
};

const findServiceById = async (id) => {
  try {
    const result = await serviceModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteServiceById = async (id) => {
  try {
    const result = await serviceModel.deleteOne({_id : id});
    return result;
  } catch (error) {
    return error;
  }
};

const updateService = async (id, data) => {
  try {
    const result= await serviceModel.updateOne({_id : id}, {$set : {...data}});
    return result;
  } catch (error) {
    return error;
  }
};

const ServiceCRUD = {
  createService,
  findServices,
  findServiceById,
  deleteServiceById,
  updateService,
};

module.exports = ServiceCRUD;