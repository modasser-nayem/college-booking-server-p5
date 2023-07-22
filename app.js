const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Import All Route
const collegeRoutes = require("./routes/collegeRoutes");

app.use("/api/v1", collegeRoutes);

module.exports = app;
