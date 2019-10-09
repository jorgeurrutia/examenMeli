const { Router } = require("express");
const router = Router();
const mutant = require("../lib/mutant");

//routes
router.post("/", (req, res) => {
    const {dna} = req.body;

    res.send(mutant.isMutant(dna));
    
});

module.exports = router;