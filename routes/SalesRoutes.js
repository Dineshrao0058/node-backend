const express = require("express")
const router = express.Router();

const sales = require("../models/SalesModel");

router.post('/addsales', (req, res) => {
    const addsales = new sales(req.body);
    addsales.save();
    res.status(201).json(addsales);
});
router.get('/viewsales', async(req,res)=>{
    console.log(req.body);
    const viewsales = await sales.find();
    res.status(201).json(viewsales);
});
router.get("/viewsales/:id", async (req,res)=>{
const viewsalesById = await sales.findById(req.params.id);
res.status(201).json(viewsalesById)
});



























module.exports = router
