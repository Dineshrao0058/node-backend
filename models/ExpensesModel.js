const mongoose = require("mongoose")

const addExpensesSchema = new mongoose.Schema(
    {
        selectdate: {
            type: String,
        },
        bills: {
            enum: ["coconut", "food", "rent", "salary", "powerbill"],
            type: String,
        },
        remarks: {
            type: String,
        },
        amount: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('expenses', addExpensesSchema)