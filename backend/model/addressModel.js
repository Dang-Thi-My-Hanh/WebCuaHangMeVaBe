const db = require("../config/db");

const createAddress = (data, callback) => {

    const sql = `
        INSERT INTO addresses
        (
            userId,
            fullName,
            phone,
            province,
            district,
            detailAddress,
            note
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            data.userId,
            data.fullName,
            data.phone,
            data.province,
            data.district,
            data.detailAddress,
            data.note
        ],
        callback
    );
};

module.exports = {
    createAddress
};