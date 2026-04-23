const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Sữa cho bé', price: 120000 },
        { id: 2, name: 'Tã em bé', price: 80000 }
    ]);
});

module.exports = router;