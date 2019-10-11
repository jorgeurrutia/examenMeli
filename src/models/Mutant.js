const mongoose = require("mongoose");
const { Schema } = mongoose;

const MutantSchema = new Schema({
    dna: { type: String, required: true},
    isMutant:{type:Boolean, required:true},
    fecha:{type:Date, default:Date.now}
});

module.exports = mongoose.model('Mutant', MutantSchema);