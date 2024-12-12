import express, { Router } from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getAproduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// GET all products
router.get("/", getProducts);
// GET product by ID
router.get("/:id", getAproduct);
// POST product
router.post("/", createProduct);
// PUT product
router.put("/:id", updateProduct);  
// DELETE product
router.delete("/:id", deleteProduct);

export default router;
