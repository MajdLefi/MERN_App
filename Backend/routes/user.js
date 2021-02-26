const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth")
const {
  getCurrent,
  getAllUsers,
  editUser,
  deleteUser,
} = require("../controllers/user");

router.get("/users/current", getCurrent);
router.get("/users/list", getAllUsers);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);


module.exports = router;
