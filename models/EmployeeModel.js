const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        mobile: {
            type: Number,
        },
        email: {
            type: String,
        },
        gender: {
            type: String,
            enum: ["male", "female", "others"],
        },
        role: {
            enum: ["manager", "employee"],
            type: String,
        },
        salary: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    {
        timestamps: true
    }

);
module.exports = mongoose.model("employees", employeeSchema);