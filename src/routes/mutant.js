const { Router } = require("express");
const router = Router();
const mutant = require("../lib/mutant");

//routes
router.post("/", (req, res) => {
    const {dna} = req.body;

    if(mutant.isMutant(dna)){
        res.send();
    }
    else{
        res.status(403).send();
    }
});

module.exports = router;