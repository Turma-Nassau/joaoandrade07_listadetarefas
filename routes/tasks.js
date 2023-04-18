var express = require("express");
const controller = require("../controller/tasks");
const router = express.Router();
const db = require("../database");



router.get("/", controller.getAll);

router.post("/", controller.createTask);

//router.get("/:id", controller.getTaskById);

router.patch("/:id", controller.updateTask);

router.delete("/:id", controller.deleteTask);

module.exports = router;