const express = require("express");
const router = express.Router()
const jwt = require("jsonwebtoken");
const User = require("../../models/user")
const auth = require("../../middleware/jwt")
const authControllers = require("../../controllers/authController")

router.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the API."
  });
});

router.post("/login", authControllers.loginHandler);

router.post("/register", authControllers.signupHandler);

router.get("/user/:uid", auth.checkToken ,authControllers.getUserHandler);

module.exports = router