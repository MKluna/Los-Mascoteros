const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const connectDB = async () => {
    mongoose.set('useCreateIndex', true);
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Connect');
    } catch (error) {
        console.log('Hay un error',error);
        process.exit(1);
    }
};

module.exports = connectDB;