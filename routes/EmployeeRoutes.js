const express = require("express")
const router = express.Router();
const employee = require("../models/EmployeeModel")

const cors = require("cors");
let corsOptions = {
    origin: ["http://localhost:8000"],
};
router.post('/addemployee', (req, res) => {
    console.log(req.body)
    const employees = new employee(req.body);
    employees.save();
    res.status(201).json(employees);
});
router.get('/viewemployees', async (req, res) => {
    console.log(req.body)
    const viewemployees = await employee.find();
    res.status(201).json(viewemployees);
});
router.put("/updateemployee/:id", cors(corsOptions), async (req, res) => {
    const updateEmployee = await employee.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).json(updateEmployee);
  });
  router.delete("/deleteemployee/:id", cors(corsOptions), async (req, res) => {
    const deleteEmployee = await employee.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteEmployee);
  });

module.exports = router
