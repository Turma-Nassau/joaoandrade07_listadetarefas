var express = require("express");
const controller = require("../controller/tasks");
const router = express.Router();
const db = require("../database");



router.get("/", controller.getAll);

router.get("/:idCollections", controller.getTaskByFk);

router.post("/", controller.createTask);

router.patch("/:id", controller.updateTask);

router.delete("/:id", controller.deleteTask);

module.exports = router;