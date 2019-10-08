const { Router } = require("express");
const router = Router();

//routes
router.get("/", (req, res) => {
    const data = {
        "nombre": "jorge",
        "apellido": "urrutia"
    };
    res.json(data);
});

module.exports = router;