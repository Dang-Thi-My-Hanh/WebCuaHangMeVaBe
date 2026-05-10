const express = require("express");

const router = express.Router();

const {
    getAccounts,
    getAccountById,
    createAccount
} = require("../controllers/accountController");

/* GET ALL */
router.get("/", getAccounts);

/* GET BY ID */
router.get("/:id", getAccountById);

/* CREATE */
router.post("/", createAccount);

module.exports = router;