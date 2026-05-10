const db = require("../config/db");

/* GET ALL PRODUCTS */
const getProducts = (callback) => {

    const sql = `
        SELECT 
            products.*,
            categories.categoryName
        FROM products
        LEFT JOIN categories
        ON products.categoryId = categories.categoryId
    `;

    db.query(sql, callback);
};

/* GET PRODUCT BY ID */
const getProductById = (id, callback) => {

    const sql = `
        SELECT 
            products.*,
            categories.categoryName
        FROM products
        LEFT JOIN categories
        ON products.categoryId = categories.categoryId
        WHERE productId = ?
    `;

    db.query(sql, [id], callback);
};

/* CREATE PRODUCT */
const createProduct = (data, callback) => {

    const sql = `
        INSERT INTO products
        (
            productName,
            price,
            description,
            categoryId,
            status
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            data.productName,
            data.price,
            data.description,
            data.categoryId,
            data.status
        ],
        callback
    );
};

/* UPDATE PRODUCT */
const updateProduct = (id, data, callback) => {

    const sql = `
        UPDATE products
        SET
            productName = ?,
            price = ?,
            description = ?,
            categoryId = ?,
            status = ?
        WHERE productId = ?
    `;

    db.query(
        sql,
        [
            data.productName,
            data.price,
            data.description,
            data.categoryId,
            data.status,
            id
        ],
        callback
    );
};

/* DELETE PRODUCT */
const deleteProduct = (id, callback) => {

    const sql = `
        DELETE FROM products
        WHERE productId = ?
    `;

    db.query(sql, [id], callback);
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};