const Account = require("../../model/accountModel");
const bcrypt = require("bcrypt");
/* GET ALL */
const getAccounts = (req, res) => {

    Account.getAccounts((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

/* GET BY ID */
const getAccountById = (req, res) => {

    const id = req.params.id;

    Account.getAccountById(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result[0]);
    });
};

/* CREATE */
const createAccount = (req, res) => {

    Account.createAccount(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Tạo tài khoản thành công"
        });
    });
};

module.exports = {
    getAccounts,
    getAccountById,
    createAccount
};