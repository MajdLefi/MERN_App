const mongoose = require('mongoose');

require('dotenv').config({ path: './config/.env' })

const connectDB = async () => {
    //mongoose options
    const options = {
        useNewUrlParser: true,
            useUnifiedTopology: true
    };
    try {
        await mongoose.connect(process.env.Mongo_URI,options);
        console.log("MongoDB connected")
    } catch (error) {
        error
            ? console.log(error)
            : console.log(`The server is running on the port ${port}`)
    }
}

module.exports = connectDB;