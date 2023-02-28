const mongoose = require("mongoose");
const { schema } = require("./user");
const BloodDonationSchema = new mongoose.Schema({
  kerkuesi: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  phoneNumber: Number,
  address: String,
  data: Number,
  sasia: Number,
  age: Number,
  gender: String,
  info: String,
});

const DonationModel = mongoose.model("BloodDonation", BloodDonationSchema);

module.exports = DonationModel;
