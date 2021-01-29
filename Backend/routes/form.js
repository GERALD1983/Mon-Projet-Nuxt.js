const express = require("express");
const router = express.Router();

const formulaire = require("../controllers/poster");

router.post("/poster", formulaire.post);
router.get("/client", formulaire.getAll);

module.exports = router;
