const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User.js");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
mongoose.set("strictQuery", true);
app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "asdfjq30y234i5uj34f2349u35234";

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
  const { emri, mbiemri, email, password } = req.body;
  try {
    const user = await User.create({
      emri,
      mbiemri,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
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
        { email: user.emri, id: user._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("pass ok");
        }
      );
      res.cookie("token", "").json("passOk");
      alert("Jeni kycur me sukses.");
    } else {
      alert("Fjalekalimi eshte gabim.");
    }
  } else {
    alert("Perdoruesi nuk ekziston.");
  }
});
app.listen(4000);
