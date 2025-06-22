const router = require("express").Router();
const Product = require("../models/Product");
const { z } = require("zod");

// Zod schema təyin edirik
const productSchema = z.object({
  vendor: z.string().min(1, "Vendor is required"),
  model: z.string().min(1, "Model is required"),
  price: z.number().positive("Price must be positive"),
});

// POST - create product
router.post("/", async (req, res) => {
  try {
    // body validasiyası
    const validatedData = productSchema.parse({
      vendor: req.body.vendor,
      model: req.body.model,
      price: Number(req.body.price), // əmin oluruq ki, number göndəririk
    });

    const newProduct = new Product(validatedData);
    await newProduct.save();

    return res.status(201).json({ mes: "Product added successfully" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ mes: "Validation Error", errors: err.errors });
    }
    return res.status(400).json({ mes: err.message });
  }
});

// GET - all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(400).json({ mes: err.message });
  }
});

// GET - single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ mes: "Product not found" });
    return res.status(200).json(product);
  } catch (err) {
    return res.status(404).json({ mes: "Product not found" });
  }
});

// DELETE - delete product
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ mes: "Product not found" });
    return res.status(200).json({ mes: "Product deleted successfully" });
  } catch (err) {
    return res.status(404).json({ mes: "Product not found" });
  }
});

module.exports = router;
