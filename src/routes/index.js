const { Router } = require("express");
const router = Router();
const mutant = require("../lib/mutant");
const mutantModel = require("../models/Mutant");

//routes
router.get("/", (req, res) => {
    res.render("index.html");
});

router.post("/mutant", (req, res) => {
    const {dna} = req.body;
    if(mutant.isMutant(dna)){
        const Mutant = new mutantModel({ dna: dna.toString(), isMutant:true });
        Mutant.save();
        res.sendStatus(200);
    }
    else{
        const Mutant = new mutantModel({ dna: dna.toString(), isMutant:false });
        Mutant.save();
        res.sendStatus(403);
    }
});

router.get("/stats", async (req, res) => {
    var retorno = {};
    retorno.count_mutant_dna = await mutantModel.countDocuments({isMutant:true});
    retorno.count_human_dna = await mutantModel.countDocuments({isMutant:false});
    retorno.ratio = retorno.count_mutant_dna / retorno.count_human_dna;

    res.json(retorno);
});

module.exports = router;