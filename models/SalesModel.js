const mongoose = require("mongoose")
const salesSchema = new mongoose.Schema(
    {
        customername: {
            type: String,
        },
        chooseproducts: {
            type: String,
        },
        price: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        total: {
            type: String,
        },
    },
    { timestamps: true }
)
module.exports = mongoose.model("sales", salesSchema)