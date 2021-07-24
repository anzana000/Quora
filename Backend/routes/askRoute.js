const express = require("express");
const askController = require("../controllers/askController");

const router = express.Router();

router
  .route("/")
  .post(askController.askQuestion)
  .get(askController.showAllQuestions);

module.exports = router;
