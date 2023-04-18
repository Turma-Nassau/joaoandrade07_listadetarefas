var express = require("express");
const controller = require("../controller/user");
const router = express.Router();
const db = require("../database");



router.get("/", controller.getAll);

router.post("/", controller.createUser);

router.get("/:id", controller.getUserById);

router.patch("/:id", controller.updateUser);

router.delete("/:id", controller.deleteUser)

// router.get("/api/users", (req, res) => {
//   var sql = "select * from user";
//   var params = [];

//   console.log(req);
//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       status: "success",
//       data: rows,
//     });
//   });
// });

// router.get("/api/users/:id", (req, res, next) => {
//   var sql = "select * from user where id = ?";
//   var params = [req.params.id];
//   db.get(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// router.post("/api/users/", (req, res, next) => {
//   var errors = [];
//   if (!req.body.password) {
//     errors.push("Falta o campo password!");
//   }
//   if (!req.body.email) {
//     errors.push("Falta o campo email!");
//   }
//   if (errors.length) {
//     res.status(400).json({ error: errors.join(",") });
//     return;
//   }
//   var data = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   };
//   var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
//   var params = [data.name, data.email, data.password];
//   db.run(sql, params, function (err, result) {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: data,
//       id: this.lastID,
//     });
//   });
// });

// router.patch("/api/users/:id", (req, res, next) => {
//   var data = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password ? req.body.password : null,
//   };
//   db.run(
//     `UPDATE user set 
//            name = COALESCE(?,name), 
//            email = COALESCE(?,email), 
//            password = COALESCE(?,password) 
//            WHERE id = ?`,
//     [data.name, data.email, data.password, req.params.id],
//     function (err, result) {
//       if (err) {
//         res.status(400).json({ error: res.message });
//         return;
//       }
//       res.json({
//         message: "sucesso",
//         data: data,
//         changes: this.changes,
//       });
//     }
//   );
// });

// router.delete("/api/users/:id", (req, res, next) => {
//   db.run(
//     "DELETE FROM user WHERE id = ?",
//     req.params.id,
//     function (err, result) {
//       if (err) {
//         res.status(400).json({ error: res.message });
//         return;
//       }
//       res.json({ message: "apagado", changes: this.changes });
//     }
//   );
// });

module.exports = router;