const { Router } = require("express");
const router = Router();
const mutant = require("../lib/mutant");

//routes
router.get("/", (req, res) => {
    res.render("index.html");
});

router.post("/mutant", (req, res) => {
    const {dna} = req.body;
    if(mutant.isMutant(dna)){
        res.sendStatus(200);
    }
    else{
        res.sendStatus(403);
    }
});

module.exports = router;