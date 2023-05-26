import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

const products = [
  {
      "_id": "63c816eebb0abd6cd69fa7ce",
      "user": "63c816eebb0abd6cd69fa7ca",
      "name": "Airpods Wireless Bluetooth Headphones",
      "image": "/images/airpods.jpg",
      "brand": "Apple",
      "category": "Electronics",
      "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      "rating": 4.5,
      "numReviews": 12,
      "price": 89.99,
      "countInStock": 10,
      "reviews": [],
      "__v": 0,
      "createdAt": "2023-01-18T15:57:34.196Z",
      "updatedAt": "2023-01-18T15:57:34.196Z"
  },
  {
      "_id": "63c816eebb0abd6cd69fa7cf",
      "user": "63c816eebb0abd6cd69fa7ca",
      "name": "iPhone 11 Pro 256GB Memory",
      "image": "/images/phone.jpg",
      "brand": "Apple",
      "category": "Electronics",
      "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      "rating": 4,
      "numReviews": 8,
      "price": 599.99,
      "countInStock": 7,
      "reviews": [],
      "__v": 0,
      "createdAt": "2023-01-18T15:57:34.197Z",
      "updatedAt": "2023-01-18T15:57:34.197Z"
  },
  {
      "_id": "63c816eebb0abd6cd69fa7d0",
      "user": "63c816eebb0abd6cd69fa7ca",
      "name": "Cannon EOS 80D DSLR Camera",
      "image": "/images/camera.jpg",
      "brand": "Cannon",
      "category": "Electronics",
      "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      "rating": 3,
      "numReviews": 12,
      "price": 929.99,
      "countInStock": 5,
      "reviews": [],
      "__v": 0,
      "createdAt": "2023-01-18T15:57:34.197Z",
      "updatedAt": "2023-01-18T15:57:34.197Z"
  },
  {
      "_id": "63c816eebb0abd6cd69fa7d1",
      "user": "63c816eebb0abd6cd69fa7ca",
      "name": "Sony Playstation 4 Pro White Version",
      "image": "/images/playstation.jpg",
      "brand": "Sony",
      "category": "Electronics",
      "description": "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      "rating": 5,
      "numReviews": 12,
      "price": 399.99,
      "countInStock": 11,
      "reviews": [],
      "__v": 0,
      "createdAt": "2023-01-18T15:57:34.197Z",
      "updatedAt": "2023-01-18T15:57:34.197Z"
  },
  {
      "_id": "63c816eebb0abd6cd69fa7d2",
      "user": "63c816eebb0abd6cd69fa7ca",
      "name": "Logitech G-Series Gaming Mouse",
      "image": "/images/mouse.jpg",
      "brand": "Logitech",
      "category": "Electronics",
      "description": "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      "rating": 3.5,
      "numReviews": 10,
      "price": 49.99,
      "countInStock": 7,
      "reviews": [],
      "__v": 0,
      "createdAt": "2023-01-18T15:57:34.197Z",
      "updatedAt": "2023-01-18T15:57:34.197Z"
  },
  {
      "_id": "63c816eebb0abd6cd69fa7d3",
      "user": "63c816eebb0abd6cd69fa7ca",
      "name": "Amazon Echo Dot 3rd Generation",
      "image": "/images/alexa.jpg",
      "brand": "Amazon",
      "category": "Electronics",
      "description": "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      "rating": 4,
      "numReviews": 12,
      "price": 29.99,
      "countInStock": 0,
      "reviews": [],
      "__v": 0,
      "createdAt": "2023-01-18T15:57:34.197Z",
      "updatedAt": "2023-01-18T15:57:34.197Z"
  }
]

// @desc    Fetch all the products
// @route   GET /api/products/
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    //const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = products.find(x=> x._id === req.params.id);//await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found." });
  })
);

export default router;
