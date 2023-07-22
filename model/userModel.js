const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
   username: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   university: {
      type: String,
      required: true,
   },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
