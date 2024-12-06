const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productController");
// Import controllers

router.post("/add", productControllers.addProduct);

router.get("/", productControllers.getAllProducts);

router.get("/:id", productControllers.getSingleProduct);

router.post("/:id/reviews", async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Request Body:", req.body);
    if (!req.body.rating || !req.body.reviewText) {
      return res
        .status(400)
        .json({ error: "Rating and reviewText are required" });
    }

    const review = {
      reviewerPic: req.body.reviewerPic || null,
      rating: req.body.rating,
      review: req.body.reviewText,
    };

    const result = await productControllers.addReview(id, review);

    if (result.error) {
      return res.status(404).json({ error: result.error });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in /:id/reviews route:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id/reviews", async (req, res) => {
  const { id } = req.params;

  const reviews = await productControllers.getProductReviews(id);

  if (reviews.error) {
    return res.status(404).json({ error: reviews.error });
  }

  return res.status(200).json({ reviews });
});

module.exports = router;
