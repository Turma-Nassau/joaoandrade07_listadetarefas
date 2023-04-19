const controller = {};
const tasksModel = require("../models/model_tasks");

controller.getAll = async (req, res) => {
  try {
    let tasksData = await tasksModel.findAll({});
    console.log(tasksData);
    res.status(200).json({ data: tasksData });
  } catch (error) {
    res.send(error);
  }
};

controller.getTaskByFk = async (req, res) => {
  console.log("Task By Fk");
  console.log(req.params);
  await tasksModel
    .findAll({
      where: {
        idCollections: req.params.idCollections,
      }
    })
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error});
    });
};

controller.createTask = async (req, res) => {
  console.log("Em createTask");
  console.log(req.body);
  await tasksModel
    .create({
      item: req.body.item,
      situation: req.body.situation,
      idCollections: req.body.idCollections,
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

controller.deleteTask = async (req, res) => {
  console.log("Delete Task");
  await tasksModel
    .destroy({
      where: {
        id: req.params.id,
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

controller.updateTask = async (req, res) => {
  console.log("Update Task");
  await tasksModel
    .update({
      item: req.body.item,
      situation: req.body.situation,
    }, {
      where: {
        id: req.params.id,
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