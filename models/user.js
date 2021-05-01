const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchame = Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  avatar: String
});

module.exports = mongoose.model("User", UserSchame);
