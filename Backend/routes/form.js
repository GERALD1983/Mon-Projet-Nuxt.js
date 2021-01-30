const express = require("express");
const router = express.Router();

const verifyEmail = require("../middleware/email");

const formulaire = require("../controllers/poster");

router.post("/poster", verifyEmail, formulaire.post);
router.get("/client", formulaire.getAll);

module.exports = router;
