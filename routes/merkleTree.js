const express = require("express");
const merkleTreeController = require("../controllers/merkleTreeController");
const chatController = require("../controllers/chat")

const router = express.Router();
router
  .route("/")
  .post(merkleTreeController.getVerifiedMerkleProof)
  .get((req, res) => {
    res.send("hello world");
  });

router.route("/chat").post(chatController.answerChat).get((req, res) => {res.send("Hello world")})

module.exports = router;
