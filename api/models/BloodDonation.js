const mongoose = require("mongoose");

const BloodDonation = new mongoose.Schema({
  kerkuesi: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  phoneNumber: Number,
  address: String,
  date: Date,
  sasia: Number,
  age: Number,
  gender: String,
  info: String,
});

const DonationModel = mongoose.model("BloodDonation", BloodDonation);

module.exports = DonationModel;
