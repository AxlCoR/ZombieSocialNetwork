
var mongoose = require("mongoose");
var armaSchema = mongoose.Schema({
    descripcion:{type: String,require: true,unique:true},
    categoria:{type:String,require:true},
    fuerza:{type:String},
    municiones:{type:String}
});

armaSchema.methods.name=function(){
    return this.descripcion & this.categoria & this.fuerza & this.municiones;
}

var Armas= mongoose.model("Arma",armaSchema);
module.exports = Armas;