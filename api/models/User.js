const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  emri: String,
  mbiemri: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  bloodGroup: String,
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
