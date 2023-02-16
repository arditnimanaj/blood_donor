const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});
app.post("/register", (req, res) => {
  const { emri, mbiemri, email, password } = req.body;
  res.json({ emri, mbiemri, email, password });
});
app.listen(4000);
