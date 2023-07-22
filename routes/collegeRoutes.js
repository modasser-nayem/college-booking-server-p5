const express = require("express");
const { getAllColleges } = require("../controllers/collegeController");
const router = express.Router();

router.route("/colleges").get(getAllColleges);

module.exports = router;
