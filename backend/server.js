import express from "express";
import env from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

env.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running..");
});

app.use("/api/products", productRouter);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5100;
app.listen(port, (req, res) => {
  console.log(`server is running in ${process.env.NODE_ENV} mode at ${port}`);
});
