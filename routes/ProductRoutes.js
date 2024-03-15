const express = require("express");
const router = express.Router();
const product = require("../models/ProductsModel");

router.post('/addproduct', (req, res) => {
    const addProduct = new product(req.body);
    addProduct.save();
    res.status(201).json(addProduct);
});
router.get('/viewproducts', async (req, res) => {
    console.log(req.body)
    const viewproduct = await product.find();
    res.status(201).json(viewproduct);
});
router.put("/updateproduct/:id", async (req, res) => {
    const updateProducts = await product.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    res.status(201).json(updateProducts);
});
router.delete("/deleteproduct/:id", async (req, res) => {
    const deleteproduct = await product.findByIdAndDelete(req.params.id)
    res.status(201).json(deleteproduct)
})


module.exports = router   