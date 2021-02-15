const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  getBootcamp,
  getOneBootcamp,
  editBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamp");

router.post("/bootcamps/list", createBootcamp);
router.get("/bootcamps/list", getBootcamp);
router.get("/bootcamps/:id", getOneBootcamp);
router.put("/bootcamps/:id", editBootcamp);
router.delete("/bootcamps/:id", deleteBootcamp);

module.exports = router;
