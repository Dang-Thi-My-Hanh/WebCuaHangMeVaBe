const Address = require("../model/addressModel");

const addAddress = (req, res) => {

    Address.createAddress(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Thêm địa chỉ thành công"
        });
    });
};
/* GET ALL ADDRESS */
const getAddresses = (req, res) => {

    Address.getAddresses((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

module.exports = {
    addAddress,
    getAddresses
};