import express from "express"
import products  from "./data/products.js"
import env from 'dotenv'

import connectDB from './config/db.js'

env.config()
connectDB();
const app = express();
app.get("/", (req, res) => {
  res.send("Api is running..");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const port = process.env.PORT || 5100;
app.listen(port, (req, res) => {
  console.log(`server is running in ${process.env.NODE_ENV} mode at ${port}`);
});
