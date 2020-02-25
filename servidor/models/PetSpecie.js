const mongoose = require('mongoose');
//comentario de prueba
const PetSpecieSchema = mongoose.Schema({
    // Descripcion
    description: {
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('PetSpecie', PetSpecieSchema);