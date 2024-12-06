const Product = require("../models/product");
const addProduct = async (req, res) => {
  try {
    const {
      productName,
      image,
      productDescription,
      productOwner,
      ownerAvatar,
      price,
    } = req.body;

    if (
      !productName ||
      !image ||
      !productDescription ||
      !productOwner ||
      !ownerAvatar ||
      !price
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const existingProduct = await Product.findOne({ productName });
    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Product with this name already exists." });
    }

    const newProduct = new Product({
      productName,
      image, // Ensure this is sent as a Buffer or Base64 encoded
      productDescription,
      productOwner,
      ownerAvatar,
      price,
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product added successfully.",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res
      .status(500)
      .json({ error: "Failed to add product. Please try again later." });
  }
};
const getProductReviews = async (productId) => {
  try {
    const product = await Product.findById(productId, "reviews");

    if (!product) {
      return { error: "Product not found" };
    }

    return product.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { error: "Failed to fetch reviews" };
  }
};
const addReview = async (productId, review) => {
  try {
    console.log("Received review:", review); // Log the review object

    // Find the product by its ID
    const product = await Product.findById(productId);

    if (!product) {
      console.log("Product not found");
      return { error: "Product not found" };
    }

    // Validate the review data
    if (!review.rating || !review.review) {
      console.log("Invalid review data:", review);
      return { error: "Review must have rating and review text" };
    }

    // Add the review to the product
    product.reviews.push(review);
    console.log("Updated reviews array:", product.reviews);

    // Save the updated product document
    await product.save();

    console.log("Review added successfully");
    return { message: "Review added successfully", product };
  } catch (error) {
    console.error("Error adding review:", error);
    return { error: "Failed to add review" };
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }

    return res.status(200).json({
      message: "Products retrieved successfully.",
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      error: "Failed to fetch products. Please try again later.",
    });
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json({
      message: "Product retrieved successfully.",
      product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid product ID." });
    }

    return res.status(500).json({
      error: "Failed to fetch product. Please try again later.",
    });
  }
};
module.exports = {
  addProduct: addProduct,
  getProductReviews: getProductReviews,
  addReview: addReview,
  getAllProducts: getAllProducts,
  getSingleProduct: getSingleProduct,
};
