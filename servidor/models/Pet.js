const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    // Nombre
    name: {
        type: String,
        require: true,
        trim: true
    },

    //Especie
    specie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetSpecie',
        require: false
    },

    //Fecha de Nacimiento
    birth: {
        type: Date,
        require: false
    },

    //Dueño/s
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    //Fecha de Creacion
    created: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Pet', PetSchema);