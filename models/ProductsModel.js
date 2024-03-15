const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
        },
        image: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number,
        },
        rating: {
            type: Number,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
    
)
module.exports = mongoose.model("product", productsSchema) 