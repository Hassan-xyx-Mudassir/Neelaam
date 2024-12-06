const express = require("express");
const authRoutes = require("./auth/authRoutes");
const productRoutes = require("./productRoutes");
const paymentRoutes = require("./paymentRoutes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/product", productRoutes);
router.use("/payment", paymentRoutes);
module.exports = router;
