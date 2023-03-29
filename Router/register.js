const router = require("express").Router();
const User = require('../model/signupSchema')
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const email= req.body.id
    const passwords = req.body.password
    if (!email || !passwords) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
  const exist =  await User.find({ MailID: email })
  console.log(exist)
      if (exist.length>0){
        return res.status(409).json({ msg: "User already exists" });
      }
    const ppdId = "PPD" + Math.floor(Math.random() * 999 + 999);

//for hashing and storing passowrd securely
    bcrypt.hash(passwords, 10, async (err, cryptedPassword) => {
      //creating colletion using model user 
      const newUser = await User.create({
        MailID: email,
        password: cryptedPassword,
        ppdId: ppdId,
      });
      // res.send(newUser)
      return res.status(201).json({
        Status: "Success",
        Message: newUser,
      });
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      Message: err,
    });
  }
});

module.exports = router;