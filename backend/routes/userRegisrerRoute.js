const { Router } = require("express");
const express = require("express");
const {
  registerUser,
  getUser,
} = require("../controllers/registerController.js");

const router = express.Router();

router.post("/register", registerUser);
router.get("/get", getUser);

module.exports = router;
