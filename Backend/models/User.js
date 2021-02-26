const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: [String],
        enum: ["Admin","Student","Instructor"],
        default: "Student",
    },
    contactNumber: { 
        type: String 
    },
    pofilePicture: { 
        type: String 
    },
})

module.exports = User = mongoose.model('User',userSchema);
