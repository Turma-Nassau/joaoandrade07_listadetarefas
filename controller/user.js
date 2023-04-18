const controller = {};
const userModel = require("../models/model_user");

controller.getAll = async (req, res) => {
  try {
    let userData = await userModel.findAll({});
    console.log(userData);
    res.status(200).json({ data: userData });
  } catch (error) {
    res.send(error);
  }
};

controller.getUserById = async (req, res) => {
  console.log("User By Id");
  console.log(req.params);
  await userModel
    .findByPk(req.params.email)
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error});
    });
};

controller.createUser = async (req, res) => {
  console.log("Em createUser");
  console.log(req.body);
  await userModel
    .create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    })
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
};

controller.deleteUser = async (req, res) => {
  console.log("Delete User");
  await userModel
    .delete({
      where: {
        email: req.params.email,
      }
    })
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
}

controller.updateUser = async (req, res) => {
  console.log("Update User");
  await userModel
    .update({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    }, {
      where: {
        email: req.params.email,
      }
    })
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
}

module.exports = controller;