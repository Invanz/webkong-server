const productOrderModel = require("../database/models/productOrderModel.js");

async function createProductOrder(productOrder) {
  try {
      const newProductOrder = await productOrderModel.create(productOrder);
      return newProductOrder;
  } catch (error) {
      return error;
  };
};

const findProductOrders = async () => {
  try {
    const productOrderList = productOrderModel.find();
    return productOrderList;
  } catch (error) {
    return error;
  };
};

const findProductOrderById = async (id) => {
  try {
    const result = await productOrderModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteProductOrderById = async (id) => {
  try {
    const result = await productOrderModel.deleteOne({_id : id});
    return result;
  } catch (error) {
    return error;
  }
};

const updateProductOrder = async (id, data) => {
  try {
    const result= await productOrderModel.updateOne({_id : id}, {$set : {...data}});
    return result;
  } catch (error) {
    return error;
  }
};

const ProductOrderCRUD = {
  createProductOrder,
  findProductOrders,
  findProductOrderById,
  deleteProductOrderById,
  updateProductOrder,
};

module.exports = ProductOrderCRUD;