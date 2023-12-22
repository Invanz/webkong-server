const userModel = require("../database/models/userModel.js");

async function createUser(user) {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    return error;
  }
}

const findUsers = async () => {
  try {
    const userList = userModel.find();
    return userList;
  } catch (error) {
    return error;
  }
};

const findUserByEmail = async (email) => {
  try {
    const result = userModel.findOne({ email: email });
    return result;
  } catch (error) {
    return error;
  }
};

const findUserById = async (id) => {
  try {
    const result = await userModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteUserById = async (id) => {
  try {
    const result = await userModel.deleteOne({ _id: id });
    return result;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, data) => {
  try {
    const result = await userModel.updateOne(
      { _id: id },
      { $set: { ...data } }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const UserCRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
  findUserByEmail,
};

module.exports = UserCRUD;
