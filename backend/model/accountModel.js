const db = require("../config/db");

/* GET ALL ACCOUNT */
const getAccounts = (callback) => {

    const sql = "SELECT * FROM users";

    db.query(sql, callback);
};

/* GET ACCOUNT BY ID */
const getAccountById = (id, callback) => {

    const sql = "SELECT * FROM users WHERE userId = ?";

    db.query(sql, [id], callback);
};

/* CREATE ACCOUNT */
const createAccount = (data, callback) => {

    const sql = `
        INSERT INTO users
        (
            userName,
            email,
            password,
            phone
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            data.userName,
            data.email,
            data.password,
            data.phone
        ],
        callback
    );
};

module.exports = {
    getAccounts,
    getAccountById,
    createAccount
};