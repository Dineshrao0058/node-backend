const express = require("express")
const router = express.Router();
const admin = require("../models/AdminModel")

const cors = require("cors");
let corsOptions = {
  origin: ["http://localhost:8000"],
};
router.post('/', cors(corsOptions), (req, res) => {
    console.log(req.body)
    const admins = new admin(req.body);
    admins.save();
    res.status(201).json(admins); 
});
router.post("/login",(req,res) => {
    const admin = admin.findOne(req.body);
if (admin){
    res.status(201).json(admin);
} else{
    res.status(201).json('Wrong credintials');
}
});

module.exports = router;