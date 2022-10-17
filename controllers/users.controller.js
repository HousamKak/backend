const UserModel = require("../models/users.model");

const createUser = async (req, res) => {
  await UserModel.create(req.body)
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};

const updateUser = async (req, res) => {
  const { id, ...data } = req.body;
  await UserModel.findByIdAndUpdate(id, {
    data,
  })
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  await UserModel.findByIdAndRemove(id).then((user) => res.send(user));
};

const getUser = async (req, res) => {
  const { id } = req.params;
  await UserModel.find({ id }).then((user) => res.send(user));
};

const getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
};
