const productModel = require("../database/models/productModel.js");

async function createProduct(product) {
  try {
      const newProduct = await productModel.create(product);
      return newProduct;
  } catch (error) {
      return error;
  };
};

const findProducts = async () => {
  try {
    const productList = productModel.find();
    return productList;
  } catch (error) {
    return error;
  };
};

const findProductById = async (id) => {
  try {
    const result = await productModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteProductById = async (id) => {
  try {
    const result = await productModel.deleteOne({_id : id});
    return result;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (id, data) => {
  try {
    const result= await productModel.updateOne({_id : id}, {$set : {...data}});
    return result;
  } catch (error) {
    return error;
  }
};

const ProductCRUD = {
  createProduct,
  findProducts,
  findProductById,
  deleteProductById,
  updateProduct,
};

module.exports = ProductCRUD;