const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        // mongoose.set('useNewUrlParser', true);
        // mongoose.set('useFindAndModify', false);
        // mongoose.set('useCreateIndex', true);
        // mongoose.set('useUnifiedTopology', true);
        mongoose.set('strictQuery', false);

        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);

    } catch (error) {
        console.log(`${error}`.bgRed);
    }
};

module.exports = connectDb;