const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User.js");
const BloodDonation = require("./models/BloodDonation.js");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { populate } = require("./models/User.js");

require("dotenv").config();
mongoose.set("strictQuery", true);
app.use(express.json());
app.use(cookieParser());
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});
app.post("/register", async (req, res) => {
  const { emri, mbiemri, email, password, bloodGroup } = req.body;
  try {
    const user = await User.create({
      emri,
      mbiemri,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      bloodGroup,
    });
    res.json(user);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const passOk = bcrypt.compareSync(password, user.password);
    if (passOk) {
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          emri: user.emri,
          mbiemri: user.mbiemri,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { emri, mbiemri, email, _id, bloodGroup } = await User.findById(
        userData.id
      );
      res.json({ emri, mbiemri, email, _id, bloodGroup });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/donations", (req, res) => {
  const { token } = req.cookies;
  const {
    phoneNumber,
    address,
    createdAt,
    sasia,
    age,
    gender,
    info,
    isAnonymous,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const donationDoc = await BloodDonation.create({
      kerkuesi: userData.id,
      phoneNumber,
      address,
      createdAt,
      sasia,
      age,
      gender,
      info,
      isAnonymous,
    });
    res.json(donationDoc);
  });
});

app.get("/donations", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await BloodDonation.find({ kerkuesi: id }).populate("kerkuesi"));
  });
});

//test purposes only
// app.get("/alldonations", async (req, res) => {
//   const { token } = req.cookies;
//   res.json(await BloodDonation.find({}));
// });

app.listen(4000);
