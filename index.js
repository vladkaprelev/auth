const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter");
const PORT = process.env.PORT || 5000;
const URL =
  process.env.URL_BASE ||
  `mongodb+srv://base_admin:admin@auth.gkfbl.mongodb.net/auth?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(URL);
    app.listen(PORT, () => console.log("SERVER START"));
  } catch (e) {
    console.log(e);
  }
};

start();
