const {signupUser,loginUser}=require('../controller/UserController')
const {addReminder,updateReminder,deleteReminder,getReminder} =require('../controller/ReminderController')
const express = require("express");
const { protect } = require('../middleware/Authentication');


const router = express.Router();

router.post("/signup", signupUser);
router.post('/login', loginUser);

router.post("/addReminder", addReminder);
router.put("/updateReminder/:id",updateReminder);
router.delete("/deleteReminder/:id",deleteReminder);
router.get("/getReminder/:id",protect, getReminder);


module.exports = router;
