const controller = {};
const collectionsModel = require("../models/model_collections");

controller.getAll = async (req, res) => {
  try {
    let collectionsData = await collectionsModel.findAll({});
    console.log(collectionsData);
    res.status(200).json({ data: collectionsData });
  } catch (error) {
    res.send(error);
  }
};

// controller.getCollectionById = async (req, res) => {
//   console.log("Collection By Id");
//   console.log(req.params);
//   await collectionsModel
//     .findByPk(req.params.id)
//     .then((data) => {
//       res.status(201).json({
//         data,
//       });
//     })
//     .catch((error) => {
//       res.status(404).json({ message: error});
//     });
// };

controller.createCollection = async (req, res) => {
  console.log("Em createCollection");
  console.log(req.body);
  await collectionsModel
    .create({
      title: req.body.title,
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

controller.deleteCollection = async (req, res) => {
  console.log("Delete Collection");
  await collectionsModel
    .delete({
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

controller.updateCollection = async (req, res) => {
  console.log("Update Collection");
  await collectionsModel
    .update({
      title: req.body.title,
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