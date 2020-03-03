const mongoose = require('mongoose');

const PetLostSchema = mongoose.Schema({
    // Mascota
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    },

    // fecha de perdida
    date: {
        type: Date,
        require: true
    },

    // Ubicacion
    ubication: {
        type: String,
        require: true,
        trim: true
    },

    // + Fotos
    pics: {
        type: String, //pasa la url
        require: true
    },

    // Recompensa
    reward: {
        type: String,
        require: false,
        trim: true
    },

    // // Dueño/s
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    
    //Telefono de contacto
    telefon: {
        type: String,
        require: false
    },


    //Fecha de Creacion
    created: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('PetLost', PetLostSchema);