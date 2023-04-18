var express = require("express");
const controller = require("../controller/collections");
const router = express.Router();
const db = require("../database");



router.get("/", controller.getAll);

router.post("/", controller.createCollection);

//router.get("/:id", controller.getCollectionById);

router.patch("/:id", controller.updateCollection);

router.delete("/:id", controller.deleteCollection);

module.exports = router;