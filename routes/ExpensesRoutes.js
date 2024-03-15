const express = require("express")
const router = express.Router();

const expenses = require("../models/ExpensesModel");

router.post('/addexpenses', (req, res) => {
    const addExpense = new expenses(req.body);
    addExpense.save();
    res.status(201).json(addExpense);
});
router.get('/viewexpenses', async (req, res) => {
    console.log(req.body)
    const viewExpense = await expenses.find();
    res.status(201).json(viewExpense);
});
router.get("/viewexpenses/:id", async (req, res) => {
    const viewExpenseById = await expenses.findById(req.params.id);
    viewExpenseById.save();
    res.status(201).json(viewExpenseById);
});

module.exports = router;