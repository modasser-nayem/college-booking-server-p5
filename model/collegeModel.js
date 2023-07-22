const mongoose = require("mongoose");
const schema = mongoose.Schema;

const collegeSchema = new schema({});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
