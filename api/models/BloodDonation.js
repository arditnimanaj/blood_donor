const mongoose = require("mongoose");

const BloodDonation = new mongoose.Schema({
  kerkuesi: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  kerkuesiGroup: { type: mongoose.Schema.Types.String, ref: "User" },
  phoneNumber: Number,
  address: String,
  createdAt: Date,
  sasia: Number,
  age: Number,
  gender: String,
  info: String,
  isAnonymous: Boolean,
});

const DonationModel = mongoose.model("BloodDonation", BloodDonation);

module.exports = DonationModel;
