const express = require("express");
const router=express.Router();
/***************START CRUD ******************/
//4-Create Your Schema
const User = require("../models/User");

//ADD A NEW USER
//PATH : /add_user
router.post("/add_user", async(req, res) => {
  const { name, lastName, email, phone } = req.body;
  const newUser = new User({ name, lastName, email, phone }); // create a new document
  try {
   let user=await newUser.save()// save user in DB
    res.send(user) //Response 
   
  } catch (error) {
    res.status(400).send({ msg: "ERROR ADD" })
  }
});

//GET ALL USERS
// PATH : /GetAllUsers
router.get("/GetAllUsers", async(req, res) => {
    try {
        let users=await User.find()
        res.send(users)
    } catch (error) {
        res.status(400).send({ msg: "ERROR GET USERS" })
    }
});

//GET USER BY ID
//PATH : /GetoneUser/:userID
router.get("/GetoneUser/:userID", async(req, res) => {
  const id = req.params.userID;
    try {
        let user=await User.findById(id)
        if (!user) {
            return res.status(404).send({ msg: "User Not Found " });
          }
          res.send(user);  
    } catch (error) {
        res.status(400).send({ msg: "ERROR GET USER BY ID" })
    }
});

//DELETE USER BY ID
//PATH : /DeleteUser/:userID
router.delete("/DeleteUser/:userID", async(req, res) => {
  const id = req.params.userID;

    try {
        let user =await User.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
        if (!user) {
            return res.status(404).send({ msg: "User Not Found " });
          }
          res.send(user);
    } catch (error) {
        res.status(400).send({ msg: "Error Remove user " })
    }
});

//UPDATE USER BY ID
//PATH : /EditUser/:userID
router.put("/EditUser/:userID", async(req, res) => {
  const userID = req.params.userID;
    try {
        let user =await  User.findByIdAndUpdate(userID, req.body, { new: true })
        if (!user) {
            return res.status(404).send({ msg: "User Not Found " });
          }
          res.send(user);
    } catch (error) {
        res.status(400).send({ msg: "ERROR" })
    }
});

/****************END CRUD *******************/

module.exports = router;;