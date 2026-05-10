const express = require("express");

const router = express.Router();

const {
    addAddress,
    getAddresses
} = require("../controllers/addressController");

/* GET ALL ADDRESS */
router.get("/", getAddresses);

/* CREATE ADDRESS */
router.post("/", addAddress);

module.exports = router;