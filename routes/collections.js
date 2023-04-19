var express = require("express");
const controller = require("../controller/collections");
const router = express.Router();
const db = require("../database");



router.get("/", controller.getAll);

router.get("/:emailUser", controller.getCollectionByFk);

router.post("/", controller.createCollection);

router.patch("/:id", controller.updateCollection);

router.delete("/:id", controller.deleteCollection);

module.exports = router;