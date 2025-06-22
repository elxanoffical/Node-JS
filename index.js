const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then(() => console.log("DB connected"))
  .catch(() => console.log("DB not connected"));

app.get("/", (req, res) => {
  res.send("get /path");
});

const productsRouter = require("./routers/products");
app.use("/products", productsRouter);

app.listen(3000, () => console.log("Server is running PORT:3000"));
